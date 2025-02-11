import { useState } from "react";
import {
  Comment,
  commentModule,
  RepliedComment,
} from "../../hooks/useCommentsStore.hook";
import { User } from "../../hooks/useUserStore.hook";

type State = (Comment | RepliedComment) & {
  replyingTo?: string;
  parentCommentId: number;
  user: User;
};

const useComment = (state: State) => {
  const [activeReply, setActiveReply] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const isReply = "replyingTo" in state;

  const handleToggleReply = () => {
    setActiveReply(!activeReply);
  };
  const handleToggleEdit = () => {
    setActiveEdit(!activeEdit);
  };

  return {
    activeReply,
    activeEdit,
    toggleReply: handleToggleReply,
    toggleEdit: handleToggleEdit,
    increaseScore: () => {
      if (isReply) {
        commentModule.updateReplyScore(
          state.parentCommentId,
          state.id,
          state.score + 1,
        );
      } else {
        commentModule.updateCommentScore(state.id, state.score + 1);
      }
    },
    decreaseScore: () => {
      if (isReply) {
        commentModule.updateReplyScore(
          state.parentCommentId,
          state.id,
          state.score - 1,
        );
      } else {
        commentModule.updateCommentScore(state.id, state.score - 1);
      }
    },
    deleteComment: () => {
      if (isReply) {
        commentModule.deleteReply(state.parentCommentId, state.id);
      } else {
        commentModule.deleteComment(state.id);
      }
    },
    addComment: (content: string) => {
      commentModule.addReply(state.parentCommentId, {
        content,
        user: state.user,
        replyingTo: state.user.username,
      });
      handleToggleReply();
    },
    editComment: (content: string) => {
      if (isReply) {
        commentModule.editReply(
          state.parentCommentId,
          state.id,
          content.replace(`@${state.replyingTo}`, ""),
        );
      } else {
        commentModule.editComment((state as State).id, content);
      }
      handleToggleEdit();
    },
    getEditDefaultValue: () => {
      if (isReply) {
        return `@${state.replyingTo} ${state.content}`;
      } else {
        return state.content;
      }
    },
  };
};

export default useComment;
