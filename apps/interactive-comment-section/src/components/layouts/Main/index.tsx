import { PropsWithChildren } from "react";
import useMediaQuery from "use-media-query/react";
import mobile from "./Main.mobile.styles";
import tablet from "./Main.tablet.styles";
import desktop from "./Main.desktop.styles";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const styles = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });

  return <main css={styles}>{children}</main>;
};

export default Main;
