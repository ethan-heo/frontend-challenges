import { useSyncExternalStore } from "react";
import { User } from "./useUserStore.hook";
import data from "../assets/data.json";

export interface RepliedComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: RepliedComment[];
}

type ReplyComment = Omit<RepliedComment, "id" | "createdAt" | "score">;

type AddComment = Omit<Comment, "id" | "createdAt" | "replies" | "score">;

let listeners: (() => void)[] = [];
let comments: Comment[] = [];
let id = 4;
const createId = () => ++id;
const createDates = () => "5 second ago";

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const commentModule = {
  async init() {
    comments = await new Promise((resolve) => resolve(data.comments));
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

    console.log(comments, commentId, replyComment);
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

    emitChange();
  },
  deleteComment(id: number) {
    comments = comments.filter((comment) => comment.id !== id);

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
