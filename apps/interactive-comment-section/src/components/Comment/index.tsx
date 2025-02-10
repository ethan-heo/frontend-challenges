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
import type {
  Comment,
  RepliedComment,
} from "../../hooks/useCommentsStore.hook";

const Comment: React.FC<(Comment | RepliedComment) & { isMe?: boolean }> = (
  commentInfo,
) => {
  const styles = useMediaQuery({
    mobile: mobile,
    tablet: tablet,
    desktop: desktop,
  });

  return (
    <div css={[common, styles]}>
      <div className="comment-score">
        <button aria-label="plus score">
          <PlusIcon />
        </button>
        <span className="comment-score__count">{commentInfo.score}</span>
        <button aria-label="minus score">
          <MinusIcon />
        </button>
      </div>
      <div className="comment-user">
        <img className="comment-user__icon" src="" alt="아이콘" />
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
          <button className="comment-utils__reply" aria-label="reply comment">
            <ReplayIcon />
            <span>Reply</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
