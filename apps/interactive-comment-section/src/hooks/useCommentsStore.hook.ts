import { useSyncExternalStore } from "react";
import { User } from "./useUserStore.hook";
import data from "../assets/data.json";

export interface RepliedComment {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  replyingTo: string;
  user: User;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: number;
  score: number;
  user: User;
  replies: RepliedComment[];
}

type ReplyComment = Omit<RepliedComment, "id" | "createdAt" | "score">;

type AddComment = Omit<Comment, "id" | "createdAt" | "replies" | "score">;

let listeners: (() => void)[] = [];
let comments: Comment[] = [];
const createId = () => (Math.floor(Math.random()) + 1) * 10000;
const createDates = () => Date.now();
const storage = {
  set(comments: Comment[]) {
    localStorage.setItem("comments", JSON.stringify(comments));
  },
  get() {
    const data = localStorage.getItem("comments");

    return data ? (JSON.parse(data) as Comment[]) : null;
  },
};

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const commentModule = {
  async init() {
    const savedComments = storage.get();

    if (!savedComments) {
      const _comments = await new Promise<Comment[]>((resolve) =>
        resolve(data.comments),
      );

      storage.set(_comments);
      comments = _comments;
    } else {
      comments = savedComments;
    }

    emitChange();
  },
  updateCommentScore(id: number, score: number) {
    comments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            score,
          }
        : comment,
    );

    storage.set(comments);
    emitChange();
  },
  updateReplyScore(commentId: number, replyId: number, score: number) {
    comments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === replyId ? { ...reply, score } : reply,
            ),
          }
        : comment,
    );
    storage.set(comments);
    emitChange();
  },
  addReply(commentId: number, replyComment: ReplyComment) {
    comments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                ...replyComment,
                id: createId(),
                createdAt: createDates(),
                score: 0,
              },
            ],
          }
        : comment,
    );

    storage.set(comments);
    emitChange();
  },
  addComment(comment: AddComment) {
    comments = [
      ...comments,
      {
        ...comment,
        id: createId(),
        createdAt: createDates(),
        replies: [],
        score: 0,
      },
    ];

    storage.set(comments);
    emitChange();
  },
  deleteComment(id: number) {
    comments = comments.filter((comment) => comment.id !== id);

    storage.set(comments);
    emitChange();
  },
  deleteReply(commentId: number, replyId: number) {
    comments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: comment.replies.filter((reply) => reply.id !== replyId),
          }
        : comment,
    );

    storage.set(comments);
    emitChange();
  },
  editComment(id: number, content: string) {
    comments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            content,
          }
        : comment,
    );

    storage.set(comments);
    emitChange();
  },
  editReply(commentId: number, replyId: number, content: string) {
    for (const comment of comments) {
      if (comment.id === commentId) {
        for (const reply of comment.replies) {
          if (reply.id === replyId) {
            reply.content = content;
          }
        }
      }
    }

    comments = [...comments];
    storage.set(comments);
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [listener, ...listeners];

    return () => {
      listeners = listeners.filter((_listener) => _listener !== listener);
    };
  },
  getSnapshot() {
    return comments;
  },
};

function useCommentsStore<T extends (comments: Comment[]) => any>(
  selector: T,
): ReturnType<T>;
function useCommentsStore(): Comment[];
function useCommentsStore<T extends (comments: Comment[]) => any>(
  selector?: T,
): ReturnType<T> {
  const comments = useSyncExternalStore(
    commentModule.subscribe,
    commentModule.getSnapshot,
  );

  return selector ? selector(comments) : comments;
}

export default useCommentsStore;
