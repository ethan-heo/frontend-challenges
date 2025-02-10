import useCommentsStore from "../hooks/useCommentsStore.hook";
import Comment from "./Comment";
import type {
  Comment as CommentType,
  RepliedComment,
} from "../hooks/useCommentsStore.hook";
import useUserStore from "../hooks/useUserStore.hook";
import CommentNesting from "./CommentNesting";

const CommentContainer: React.FC = () => {
  const comments = useCommentsStore();
  const user = useUserStore();

  const checkMe = (comment: CommentType | RepliedComment) =>
    comment.user.username === user.username;

  return (
    <CommentNesting>
      {comments.map((comment) => (
        <li key={`comment-${comment.id}`}>
          <Comment
            {...comment}
            isMe={checkMe(comment)}
            parentCommentId={comment.id}
          />
          {comment.replies.length > 0 && (
            <CommentNesting>
              {comment.replies.map((reply) => (
                <li key={`reply-${reply.id}`}>
                  <Comment
                    {...reply}
                    isMe={checkMe(reply)}
                    parentCommentId={comment.id}
                  />
                </li>
              ))}
            </CommentNesting>
          )}
        </li>
      ))}
    </CommentNesting>
  );
};

export default CommentContainer;
