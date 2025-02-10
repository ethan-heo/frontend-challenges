import { useEffect } from "react";
import CommentAdd from "./components/CommentAdd";
import CommentContainer from "./components/CommentContainer";
import Main from "./components/layouts/Main";
import { userModule } from "./hooks/useUserStore.hook";
import { commentModule } from "./hooks/useCommentsStore.hook";

function App() {
  useEffect(() => {
    userModule.init();
    commentModule.init();
  }, []);
  return (
    <Main>
      <CommentContainer />
      <CommentAdd />
    </Main>
  );
}

export default App;
