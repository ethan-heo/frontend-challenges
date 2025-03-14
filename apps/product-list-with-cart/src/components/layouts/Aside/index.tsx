import { PropsWithChildren } from "react";
import mobile from "./Aside.mobile.styles";
import tablet from "./Aside.tablet.styles";
import desktop from "./Aside.desktop.styles";
import common from "./Aside.common.styles";
import useMediaQuery from "use-media-query/react";

const Aside: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  return <aside css={[common, style]}>{children}</aside>;
};

export default Aside;
