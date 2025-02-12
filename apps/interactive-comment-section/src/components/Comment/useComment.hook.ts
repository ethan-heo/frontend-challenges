import { useState } from "react";
import {
  Comment,
  commentModule,
  RepliedComment,
} from "../../hooks/useCommentsStore.hook";
import useUserStore, { User } from "../../hooks/useUserStore.hook";
import { AppModule } from "../../hooks/useAppStore.hook";

type State = (Comment | RepliedComment) & {
  replyingTo?: string;
  parentCommentId: number;
  user: User;
};

const useComment = (state: State) => {
  const [activeReply, setActiveReply] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const user = useUserStore();
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
        AppModule.toggleDeleteModal({
          parentCommentId: state.parentCommentId,
          commentId: state.id,
        });
      } else {
        AppModule.toggleDeleteModal({ commentId: state.id });
      }
    },
    addComment: (content: string) => {
      commentModule.addReply(state.parentCommentId, {
        content: content.replace(`@${state.user.username} `, ""),
        user,
        replyingTo: state.user.username,
      });
      handleToggleReply();
    },
    editComment: (content: string) => {
      if (isReply) {
        commentModule.editReply(
          state.parentCommentId,
          state.id,
          content.replace(`@${state.replyingTo} `, ""),
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
    getTime: (createdAt: number) => {
      const diffTime = (time: number, unit: number) => Math.floor(time / unit);
      const TIME_UNIT_MAP = {
        0: "seconds",
        1: "minutes",
        2: "hours",
        3: "days",
        4: "weeks",
        5: "months",
        6: "years",
      };
      const DIFF_UNITS = [60, 60, 24, 7, 4, 12];
      let timeUnit = 0;
      let value = diffTime(Date.now() - createdAt, 1000);

      for (let idx = 0, diff = value; idx < DIFF_UNITS.length; idx++) {
        diff = diffTime(diff, DIFF_UNITS[idx]);
        timeUnit = idx;

        if (diff === 0) {
          break;
        }

        value = diff;
      }

      return `${value} ${TIME_UNIT_MAP[timeUnit as keyof typeof TIME_UNIT_MAP]} ago`;
    },
  };
};

export default useComment;
