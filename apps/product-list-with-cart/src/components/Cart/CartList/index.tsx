import CartItem from "./CartItem";

const CartList: React.FC = () => {
  return (
    <>
      <ul>
        <CartItem />
      </ul>
      <div>
        <span>Order Total</span>
        <span>$ 총 가격</span>
      </div>
      <p>
        This is a <span>carbon-neutral</span> delivery
      </p>
      <button>Confirm Order</button>
    </>
  );
};

export default CartList;
