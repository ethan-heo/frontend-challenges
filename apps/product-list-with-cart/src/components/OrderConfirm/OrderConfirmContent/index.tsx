import CheckIcon from "../../../assets/images/icon-order-confirmed.svg?react";
import common from "./OrderConfirmContent.common.styles";
import mobile from "./OrderConfirmContent.mobile.styles";
import tablet from "./OrderConfirmContent.tablet.styles";
import desktop from "./OrderConfirmContent.desktop.styles";
import OrderConfirmList from "./OrderConfirmList";
import OrderConfirmTotalPrice from "./OrderConfirmTotalPrice";
import OrderConfirmButton from "./OrderConfirmButton";
import useMediaQuery from "use-media-query";

const OrderConfirmContent: React.FC = () => {
  const styles = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  return (
    <div css={[common, styles]}>
      <CheckIcon className="order-confirm-content__icon" />
      <h3 className="order-confirm-content__title">Order Confirmed</h3>
      <p className="order-confirm-content__desc">
        We hope you enjoy your food!
      </p>
      <div className="order-confirm-content__product">
        <OrderConfirmList />
        <OrderConfirmTotalPrice />
      </div>
      <OrderConfirmButton />
    </div>
  );
};

export default OrderConfirmContent;
