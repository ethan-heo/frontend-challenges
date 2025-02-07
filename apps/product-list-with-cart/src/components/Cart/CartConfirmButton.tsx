import { cartStore } from "../../hooks/useCartStore.hook";
import styles from "./CartConfirmButton.styles";

const CartConfirmButton: React.FC = () => {
  return (
    <button css={styles} onClick={() => cartStore.toggleConfirm()}>
      Confirm Order
    </button>
  );
};

export default CartConfirmButton;
