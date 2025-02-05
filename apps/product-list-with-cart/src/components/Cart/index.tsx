import useMediaQueryWithEmotion from "../../hooks/useMediaQuery.hook";
import common from "./Cart.common.styles";
import desktop from "./Cart.desktop.styles";
import mobile from "./Cart.mobile.styles";
import tablet from "./Cart.tablet.styles";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";

const Cart: React.FC = () => {
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });
  return (
    <div css={[common, style]}>
      <h2>Your Cart (개수)</h2>
      <CartEmpty />
      <CartList />
    </div>
  );
};

export default Cart;
