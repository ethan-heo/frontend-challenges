import useCartStore, { cartStore } from "../../../hooks/useCartStore.hook";
import CartItem from "./CartItem";

const CartList: React.FC = () => {
  const orderItems = useCartStore();

  return (
    <ul>
      {orderItems.map((orderItem) => (
        <CartItem
          key={`order-item-${orderItem.productId}`}
          {...orderItem}
          remove={() => cartStore.removeOrderItem(orderItem.productId)}
        />
      ))}
    </ul>
  );
};

export default CartList;
