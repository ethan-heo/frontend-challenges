import useMediaQueryWithEmotion from "../../hooks/useMediaQuery.hook";
import common from "./OrderConfirm.common.styles";
import desktop from "./OrderConfirm.desktop.styles";
import mobile from "./OrderConfirm.mobile.styles";
import tablet from "./OrderConfirm.tablet.styles";
import OrderConfirmContent from "./OrderConfirmContent";

const OrderConfirm: React.FC = () => {
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });
  return (
    <div css={[common, style]}>
      <OrderConfirmContent />
    </div>
  );
};

export default OrderConfirm;
