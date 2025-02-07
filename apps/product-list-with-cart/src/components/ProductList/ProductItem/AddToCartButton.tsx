import styles from "./AddToCartButton.styles";
import AddCartIcon from "../../../assets/images/icon-add-to-cart.svg?react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg?react";
import useProductItemStore from "../../../hooks/useProductStore.hook";

interface Prop {
  productItemId: string;
  productItemSelected: boolean;
  productItemQuantity: number;
}

const AddToCartButton: React.FC<Prop> = ({
  productItemSelected,
  productItemQuantity,
  productItemId,
}) => {
  const { select, increase, decrease } = useProductItemStore();

  return (
    <>
      {productItemSelected ? (
        <div css={styles} data-selected={productItemSelected}>
          <button
            aria-label="decrease quantity"
            onClick={() => decrease(productItemId)}
          >
            <DecrementIcon />
          </button>
          <span>{productItemQuantity}</span>
          <button
            aria-label="increase quantity"
            onClick={() => increase(productItemId)}
          >
            <IncrementIcon />
          </button>
        </div>
      ) : (
        <button
          css={styles}
          data-selected={productItemSelected}
          onClick={() => select(productItemId)}
        >
          <AddCartIcon />
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
