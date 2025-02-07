import styles from "./CartItem.styles";
import RemoveIcon from "../../../assets/images/icon-remove-item.svg?react";
import { OrderItem } from "../../../hooks/useCartStore.hook";

interface Props extends OrderItem {
  remove: () => void;
}

const CartItem: React.FC<Props> = ({
  productName,
  productPrice,
  productQuantity,
  remove,
}) => {
  return (
    <li css={styles} className="cart-item">
      <div>
        <strong className="cart-item__product-name">{productName}</strong>
        <div className="cart-item__product-info">
          <span className="cart-item__product-info__quantity">
            {productQuantity}x
          </span>
          <span className="cart-item__product-info__price">
            @{productPrice}
          </span>
          <span className="cart-item__product-info__total-price">
            ${productPrice * productQuantity}
          </span>
        </div>
      </div>
      <button
        aria-label="remove item"
        className="cart-item__remove-item"
        onClick={() => remove()}
      >
        <RemoveIcon />
      </button>
    </li>
  );
};

export default CartItem;
