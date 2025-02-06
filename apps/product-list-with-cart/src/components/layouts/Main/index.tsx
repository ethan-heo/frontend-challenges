import { PropsWithChildren } from "react";
import useMediaQueryWithEmotion from "../../../hooks/useMediaQuery.hook";
import mobile from "./Main.mobile.styles";
import tablet from "./Main.tablet.styles";
import desktop from "./Main.desktop.styles";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });
  return <main css={style}>{children}</main>;
};

export default Main;
