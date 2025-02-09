import CommentAdd from "./components/CommentAdd";
import CommentContainer from "./components/CommentContainer";
import Main from "./components/layouts/Main";

function App() {
  return (
    <Main>
      <CommentContainer />
      <CommentAdd />
    </Main>
  );
}

export default App;
