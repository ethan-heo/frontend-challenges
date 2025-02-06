import styles from "./AddToCartButton.styles";
import AddCartIcon from "../../../assets/images/icon-add-to-cart.svg?react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg?react";

interface Prop {
  selected?: boolean;
}

const AddToCartButton: React.FC<Prop> = ({ selected }) => {
  return (
    <>
      {selected ? (
        <div css={styles} data-selected={selected}>
          <button aria-label="decrease quantity">
            <DecrementIcon />
          </button>
          <span>0</span>
          <button aria-label="increase quantity">
            <IncrementIcon />
          </button>
        </div>
      ) : (
        <button css={styles} data-selected={selected}>
          <AddCartIcon />
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
