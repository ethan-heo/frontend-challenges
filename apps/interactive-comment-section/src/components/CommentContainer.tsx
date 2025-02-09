import Comment from "./Comment";
import CommentNesting from "./CommentNesting";

const CommentContainer: React.FC = () => {
  return (
    <>
      <CommentNesting>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <CommentNesting>
          <li>
            <Comment />
          </li>
          <li>
            <Comment />
          </li>
          <li>
            <Comment />
          </li>
        </CommentNesting>
      </CommentNesting>
    </>
  );
};

export default CommentContainer;
