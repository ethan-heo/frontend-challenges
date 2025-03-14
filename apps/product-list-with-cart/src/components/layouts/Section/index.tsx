import { PropsWithChildren } from "react";
import common from "./Section.common.styles";
import mobile from "./Section.mobile.styles";
import tablet from "./Section.tablet.styles";
import desktop from "./Section.desktop.styles";
import useMediaQuery from "use-media-query/react";

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  return (
    <section css={[common, style]}>
      <h1>Desserts</h1>
      {children}
    </section>
  );
};

export default Section;
