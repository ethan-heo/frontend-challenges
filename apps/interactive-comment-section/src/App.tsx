import { useEffect } from "react";
import CommentAdd from "./components/CommentAdd";
import CommentContainer from "./components/CommentContainer";
import Main from "./components/layouts/Main";
import useUserStore, { userModule } from "./hooks/useUserStore.hook";
import { commentModule } from "./hooks/useCommentsStore.hook";

function App() {
  const user = useUserStore();

  useEffect(() => {
    (async () => {
      await userModule.init();
      await commentModule.init();
    })();
  }, []);
  return (
    <Main>
      <CommentContainer />
      <CommentAdd
        addComment={(content) => commentModule.addComment({ content, user })}
      />
    </Main>
  );
}

export default App;
