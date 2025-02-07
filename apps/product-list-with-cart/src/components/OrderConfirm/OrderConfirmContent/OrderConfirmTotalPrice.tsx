import useCartStore from "../../../hooks/useCartStore.hook";
import transformPriceDecimal from "../../../utils/transformPriceDecimal.util";
import styles from "./OrderConfirmTotalPrice.styles";

const OrderConfirmTotalPrice: React.FC = () => {
  const totalPrice = useCartStore((orderItems) =>
    orderItems.reduce(
      (acc, { productPrice, productQuantity }) =>
        acc + productPrice * productQuantity,
      0,
    ),
  );

  return (
    <div css={styles}>
      <span className="order-confirm-total__title">Order Total</span>
      <span className="order-confirm-total__price">{`$${transformPriceDecimal(totalPrice)}`}</span>
    </div>
  );
};

export default OrderConfirmTotalPrice;
