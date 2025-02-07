import styles from "./AddToCartButton.styles";
import AddCartIcon from "../../../assets/images/icon-add-to-cart.svg?react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg?react";

interface Prop {
  productItemSelected: boolean;
  productItemQuantity: number;
  select: () => void;
  increase: () => void;
  decrease: () => void;
}

const AddToCartButton: React.FC<Prop> = ({
  productItemQuantity,
  productItemSelected,
  increase,
  decrease,
  select,
}) => {
  return (
    <>
      {productItemSelected ? (
        <div css={styles} data-selected={productItemSelected}>
          <button aria-label="decrease quantity" onClick={() => decrease()}>
            <DecrementIcon />
          </button>
          <span>{productItemQuantity}</span>
          <button aria-label="increase quantity" onClick={() => increase()}>
            <IncrementIcon />
          </button>
        </div>
      ) : (
        <button
          css={styles}
          data-selected={productItemSelected}
          onClick={() => select()}
        >
          <AddCartIcon />
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
