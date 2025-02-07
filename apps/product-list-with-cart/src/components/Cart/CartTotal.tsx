import useCartStore from "../../hooks/useCartStore.hook";
import transformPriceDecimal from "../../utils/transformPriceDecimal.util";
import styles from "./CartTotal.styles";

const CartTotal: React.FC = () => {
  const totalPrice = useCartStore((orderItems) =>
    orderItems.reduce(
      (acc, orderItem) =>
        acc + orderItem.productPrice * orderItem.productQuantity,
      0,
    ),
  );

  return (
    <div css={styles}>
      <span className="cart-total__title">Order Total</span>
      <span className="cart-total__price">
        ${transformPriceDecimal(totalPrice)}
      </span>
    </div>
  );
};

export default CartTotal;
