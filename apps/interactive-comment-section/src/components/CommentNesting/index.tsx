import useMediaQuery from "use-media-query/react";
import mobile from "./CommentNesting.mobile.styles";
import tablet from "./CommentNesting.tablet.styles";
import desktop from "./CommentNesting.desktop.styles";

const CommentNesting: React.FC<React.PropsWithChildren> = ({ children }) => {
  const styles = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  return <ul css={styles}>{children}</ul>;
};

export default CommentNesting;
