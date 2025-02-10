import useMediaQuery from "use-media-query";
import common from "./CommentAdd.common.styles";
import mobile from "./CommentAdd.mobile.styles";
import tablet from "./CommentAdd.tablet.styles";
import desktop from "./CommentAdd.desktop.styles";
import useUserStore from "../../hooks/useUserStore.hook";
import { useRef } from "react";

interface Props {
  addComment: (content: string) => void;
  defaultValue?: string;
}

const CommentAdd: React.FC<Props> = ({ addComment, defaultValue }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const user = useUserStore();
  const styles = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });

  const handleAddComment = () => {
    addComment(ref.current!.value);
  };

  return (
    <div css={[common, styles]}>
      <textarea
        ref={ref}
        className="comment-add__textarea"
        placeholder="Add a comment..."
        defaultValue={defaultValue}
      />
      <picture className="comment-add__user-icon">
        <source srcSet={user?.image?.webp} />
        <img src={user?.image?.png} alt={user?.username} />
      </picture>
      <button
        className="comment-add__send-btn"
        aria-label="send comment"
        onClick={handleAddComment}
      >
        SEND
      </button>
    </div>
  );
};

export default CommentAdd;
