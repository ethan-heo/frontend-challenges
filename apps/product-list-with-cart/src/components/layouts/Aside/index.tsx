import { PropsWithChildren } from "react";
import useMediaQueryWithEmotion from "../../../hooks/useMediaQuery.hook";
import mobile from "./Aside.mobile.styles";
import tablet from "./Aside.tablet.styles";
import desktop from "./Aside.desktop.styles";
import common from "./Aside.common.styles";

const Aside: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });
  return <aside css={[common, style]}>{children}</aside>;
};

export default Aside;
