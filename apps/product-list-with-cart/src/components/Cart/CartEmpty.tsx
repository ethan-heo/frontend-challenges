import EmptyIcon from "../../assets/images/illustration-empty-cart.svg?react";
import styles from "./CartEmpty.styles";

const CartEmpty: React.FC = () => {
  return (
    <div css={styles}>
      <EmptyIcon />
      <p className="cart-empty__desc">Your added items will appear here</p>
    </div>
  );
};

export default CartEmpty;
