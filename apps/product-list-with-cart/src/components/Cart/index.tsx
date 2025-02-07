import useCartStore from "../../hooks/useCartStore.hook";
import useMediaQueryWithEmotion from "../../hooks/useMediaQuery.hook";
import common from "./Cart.common.styles";
import desktop from "./Cart.desktop.styles";
import CartAd from "./CartAd";
import CartConfirmButton from "./CartConfirmButton";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart: React.FC = () => {
  const styles = useMediaQueryWithEmotion({
    desktop,
  });
  const productCount = useCartStore((cart) => cart.orderItems.length);

  return (
    <div css={[common, styles]}>
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
