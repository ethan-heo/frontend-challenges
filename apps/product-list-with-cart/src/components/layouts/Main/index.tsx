import { PropsWithChildren } from "react";
import mobile from "./Main.mobile.styles";
import tablet from "./Main.tablet.styles";
import desktop from "./Main.desktop.styles";
import common from "./Main.common.styles";
import useMediaQuery from "use-media-query/react";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  return <main css={[common, style]}>{children}</main>;
};

export default Main;
