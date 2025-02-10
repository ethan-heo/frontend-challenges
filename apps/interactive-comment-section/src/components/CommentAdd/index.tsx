import useMediaQuery from "use-media-query";
import common from "./CommentAdd.common.styles";
import mobile from "./CommentAdd.mobile.styles";
import tablet from "./CommentAdd.tablet.styles";
import desktop from "./CommentAdd.desktop.styles";

const CommentAdd: React.FC = () => {
  const styles = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  return (
    <div css={[common, styles]}>
      <textarea
        className="comment-add__textarea"
        placeholder="Add a comment..."
      />
      <img className="comment-add__user-icon" src="" alt="" />
      <button className="comment-add__send-btn" aria-label="send comment">
        SEND
      </button>
    </div>
  );
};

export default CommentAdd;
