import useCartStore from "../../hooks/useCartStore.hook";
import styles from "./Cart.styles";
import CartAd from "./CartAd";
import CartConfirmButton from "./CartConfirmButton";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart: React.FC = () => {
  const productCount = useCartStore((orderItems) => orderItems.length);

  return (
    <div css={styles}>
      <h2>Your Cart ({productCount})</h2>
      {productCount > 0 ? (
        <>
          <CartList />
          <CartTotal />
          <CartAd />
          <CartConfirmButton />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
