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

const Comment: React.FC = () => {
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
        <span className="comment-score__count">{`12`}</span>
        <button aria-label="minus score">
          <MinusIcon />
        </button>
      </div>
      <div className="comment-user">
        <img className="comment-user__icon" src="" alt="아이콘" />
        <div className="comment-user__me">you</div>
        <span className="comment-user__dates">created dates</span>
      </div>
      <p className="comment-content">
        <span className="comment-content__nickname">@nickname</span>
        Aliqua nisi magna laboris excepteur id duis aliquip. Et exercitation
        officia aute amet esse veniam ea magna cupidatat commodo labore aute. Ad
        esse nulla mollit ipsum consectetur incididunt. Ipsum ipsum occaecat
        veniam sunt cillum sit officia Lorem ea commodo officia commodo. Anim
        veniam ut eiusmod eiusmod. Qui dolor officia Lorem excepteur veniam
        culpa voluptate culpa voluptate eu duis laborum eu qui. Dolor anim
        labore cupidatat est proident minim elit dolor mollit ullamco ut
        reprehenderit.
      </p>
      <div className="comment-utils">
        {/* <button className="comment-utils__reply" aria-label="reply comment">
          <ReplayIcon />
          <span>Reply</span>
        </button> */}
        <button className="comment-utils__delete" aria-label="delete comment">
          <DeleteIcon />
          <span>Delete</span>
        </button>
        <button className="comment-utils__edit" aria-label="edit comment">
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
