import styles from "./CartTotal.styles";

const CartTotal: React.FC = () => {
  return (
    <div css={styles}>
      <span className="cart-total__title">Order Total</span>
      <span className="cart-total__price">$46.50</span>
    </div>
  );
};

export default CartTotal;
