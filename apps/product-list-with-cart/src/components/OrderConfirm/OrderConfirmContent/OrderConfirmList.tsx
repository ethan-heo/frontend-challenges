import useCartStore from "../../../hooks/useCartStore.hook";
import OrderConfirmItem from "./OrderConfirmItem";
import styles from "./OrderConfirmList.styles";

const OrderConfirmList: React.FC = () => {
  const orderItems = useCartStore();

  return (
    <ul css={styles}>
      {orderItems.map((orderItem) => (
        <OrderConfirmItem
          key={`order-confirm-item-${orderItem.productId}`}
          {...orderItem}
        />
      ))}
    </ul>
  );
};

export default OrderConfirmList;
