import PlusIcon from "../../assets/images/icon-plus.svg?react";
import MinusIcon from "../../assets/images/icon-minus.svg?react";
import DeleteIcon from "../../assets/images/icon-delete.svg?react";
import EditIcon from "../../assets/images/icon-edit.svg?react";
import ReplayIcon from "../../assets/images/icon-reply.svg?react";
import useMediaQuery from "use-media-query";
import mobile from "./Comment.mobile.styles";
import tablet from "./Comment.tablet.styles";
import desktop from "./Comment.desktop.styles";
import common from "./Comment.common.styles";
import {
  commentModule,
  type Comment,
  type RepliedComment,
} from "../../hooks/useCommentsStore.hook";
import { useState } from "react";
import CommentAdd from "../CommentAdd";
import useUserStore from "../../hooks/useUserStore.hook";

const Comment: React.FC<
  (Comment | RepliedComment) & { isMe?: boolean; parentCommentId: number }
> = (commentInfo) => {
  const [activeReply, setActiveReply] = useState(false);
  const user = useUserStore();
  const styles = useMediaQuery({
    mobile: mobile,
    tablet: tablet,
    desktop: desktop,
  });
  const isReply = "replyingTo" in commentInfo;

  const handleToggleReply = () => {
    setActiveReply(!activeReply);
  };

  return (
    <>
      <div css={[common, styles]}>
        <div className="comment-score">
          <button
            aria-label="plus score"
            onClick={() =>
              commentModule.updateScore(commentInfo.id, commentInfo.score + 1)
            }
          >
            <PlusIcon />
          </button>
          <span className="comment-score__count">{commentInfo.score}</span>
          <button
            aria-label="minus score"
            onClick={() =>
              commentModule.updateScore(commentInfo.id, commentInfo.score - 1)
            }
          >
            <MinusIcon />
          </button>
        </div>
        <div className="comment-user">
          <picture className="comment-user__icon">
            <source srcSet={commentInfo.user.image.webp} />
            <img
              src={commentInfo.user.image.png}
              alt={commentInfo.user.username}
            />
          </picture>
          {commentInfo.isMe && <div className="comment-user__me">you</div>}
          <span className="comment-user__dates">{commentInfo.createdAt}</span>
        </div>
        <p className="comment-content">
          {(commentInfo as RepliedComment).replyingTo && (
            <span className="comment-content__nickname">
              {`@${(commentInfo as RepliedComment).replyingTo}`}
            </span>
          )}
          {commentInfo.content}
        </p>
        <div className="comment-utils">
          {commentInfo.isMe ? (
            <>
              <button
                className="comment-utils__delete"
                aria-label="delete comment"
                onClick={() => {
                  if (isReply) {
                    commentModule.deleteReply(
                      commentInfo.parentCommentId,
                      commentInfo.id,
                    );
                  } else {
                    commentModule.deleteComment(commentInfo.id);
                  }
                }}
              >
                <DeleteIcon />
                <span>Delete</span>
              </button>
              <button className="comment-utils__edit" aria-label="edit comment">
                <EditIcon />
                <span>Edit</span>
              </button>
            </>
          ) : (
            <button
              className="comment-utils__reply"
              aria-label="reply comment"
              onClick={handleToggleReply}
            >
              <ReplayIcon />
              <span>Reply</span>
            </button>
          )}
        </div>
      </div>
      {activeReply && (
        <CommentAdd
          addComment={(content) => {
            commentModule.addReply(commentInfo.parentCommentId, {
              content,
              user,
              replyingTo: commentInfo.user.username,
            });
            handleToggleReply();
          }}
          defaultValue={`@${commentInfo.user.username} `}
        />
      )}
    </>
  );
};

export default Comment;
