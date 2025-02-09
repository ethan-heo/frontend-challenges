import Comment from "./components/Comment";
import CommentAdd from "./components/CommentAdd";
import CommentNesting from "./components/CommentNesting";
import Main from "./components/layouts/Main";

function App() {
  return (
    <Main>
      <CommentNesting>
        <Comment />
        <Comment />
        <CommentNesting>
          <Comment />
          <Comment />
        </CommentNesting>
      </CommentNesting>
      <CommentAdd />
    </Main>
  );
}

export default App;
