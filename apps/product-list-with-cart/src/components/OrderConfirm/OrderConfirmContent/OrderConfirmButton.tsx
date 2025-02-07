import { cartStore } from "../../../hooks/useCartStore.hook";
import styles from "./OrderConfirmButton.styles";

const OrderConfirmButton: React.FC = () => {
  return (
    <button css={styles} onClick={() => cartStore.toggleConfirm()}>
      Start New Order
    </button>
  );
};

export default OrderConfirmButton;
