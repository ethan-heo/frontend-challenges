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
  type Comment,
  type RepliedComment,
} from "../../hooks/useCommentsStore.hook";
import { useRef } from "react";
import CommentAdd from "../CommentAdd";
import useUserStore from "../../hooks/useUserStore.hook";
import useComment from "./useComment.hook";

const Comment: React.FC<
  (Comment | RepliedComment) & { isMe?: boolean; parentCommentId: number }
> = (commentInfo) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const user = useUserStore();
  const comment = useComment({ ...commentInfo, user });
  const styles = useMediaQuery({
    mobile: mobile,
    tablet: tablet,
    desktop: desktop,
  });

  return (
    <>
      <div css={[common, styles]}>
        <div className="comment-score">
          <button aria-label="plus score" onClick={comment.increaseScore}>
            <PlusIcon />
          </button>
          <span className="comment-score__count">{commentInfo.score}</span>
          <button aria-label="minus score" onClick={comment.decreaseScore}>
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
          <span className="comment-user__name">
            {commentInfo.user.username}
          </span>
          {commentInfo.isMe && <div className="comment-user__me">you</div>}
          <span className="comment-user__dates">{commentInfo.createdAt}</span>
        </div>
        {comment.activeEdit ? (
          <div className="comment-content" data-editable={comment.activeEdit}>
            <textarea
              ref={textareaRef}
              className="comment-content__textarea"
              defaultValue={comment.getEditDefaultValue()}
              aria-label="Edit your comment"
            />
            <button
              className="comment-content__update-btn"
              onClick={() => comment.editComment(textareaRef.current!.value)}
            >
              UPDATE
            </button>
          </div>
        ) : (
          <p className="comment-content">
            {(commentInfo as RepliedComment).replyingTo && (
              <span className="comment-content__nickname">
                {`@${(commentInfo as RepliedComment).replyingTo}`}
              </span>
            )}
            {commentInfo.content}
          </p>
        )}

        <div className="comment-utils">
          {commentInfo.isMe ? (
            <>
              <button
                className="comment-utils__delete"
                aria-label="delete comment"
                onClick={() => comment.deleteComment()}
              >
                <DeleteIcon />
                <span>Delete</span>
              </button>
              <button
                className="comment-utils__edit"
                aria-label="edit comment"
                onClick={() => comment.toggleEdit()}
              >
                <EditIcon />
                <span>Edit</span>
              </button>
            </>
          ) : (
            <button
              className="comment-utils__reply"
              aria-label="reply comment"
              onClick={() => comment.toggleReply()}
            >
              <ReplayIcon />
              <span>Reply</span>
            </button>
          )}
        </div>
      </div>
      {comment.activeReply && (
        <CommentAdd
          addComment={(content) => comment.addComment(content)}
          defaultValue={`@${commentInfo.user.username} `}
        />
      )}
    </>
  );
};

export default Comment;
