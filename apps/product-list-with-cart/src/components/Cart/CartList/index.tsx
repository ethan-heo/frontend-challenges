import useCartStore, { cartStore } from "../../../hooks/useCartStore.hook";
import { productItemStore } from "../../../hooks/useProductStore.hook";
import CartItem from "./CartItem";

const CartList: React.FC = () => {
  const orderItems = useCartStore((cart) => cart.orderItems);

  return (
    <ul>
      {orderItems.map((orderItem) => (
        <CartItem
          key={`order-item-${orderItem.productId}`}
          {...orderItem}
          remove={() => {
            cartStore.removeOrderItem(orderItem.productId);
            productItemStore.selectProductItem(orderItem.productId);
            productItemStore.updateProductItemQuantity(orderItem.productId, 1);
          }}
        />
      ))}
    </ul>
  );
};

export default CartList;
