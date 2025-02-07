import useCartStore from "../../hooks/useCartStore.hook";
import useMediaQueryWithEmotion from "../../hooks/useMediaQuery.hook";
import common from "./OrderConfirm.common.styles";
import desktop from "./OrderConfirm.desktop.styles";
import mobile from "./OrderConfirm.mobile.styles";
import tablet from "./OrderConfirm.tablet.styles";
import OrderConfirmContent from "./OrderConfirmContent";

const OrderConfirm: React.FC = () => {
  const activeConfirm = useCartStore((cart) => cart.activeConfirm);
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });

  if (!activeConfirm) {
    return null;
  }

  return (
    <div css={[common, style]}>
      <OrderConfirmContent />
    </div>
  );
};

export default OrderConfirm;
