import { cartStore } from "../../../hooks/useCartStore.hook";
import { productItemStore } from "../../../hooks/useProductStore.hook";
import styles from "./OrderConfirmButton.styles";

const OrderConfirmButton: React.FC = () => {
  return (
    <button
      css={styles}
      onClick={() => {
        cartStore.toggleConfirm();
        cartStore.clearOrderItems();
        productItemStore.resetProductItems();
      }}
    >
      Start New Order
    </button>
  );
};

export default OrderConfirmButton;
