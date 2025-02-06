import styles from "./CartItem.styles";
import RemoveIcon from "../../../assets/images/icon-remove-item.svg?react";

const CartItem: React.FC = () => {
  return (
    <li css={styles} className="cart-item">
      <div>
        <strong className="cart-item__product-name">Classic Tiramisu</strong>
        <div className="cart-item__product-info">
          <span className="cart-item__product-info__quantity">1x</span>
          <span className="cart-item__product-info__price">@5.50</span>
          <span className="cart-item__product-info__total-price">$5.50</span>
        </div>
      </div>
      <button aria-label="remove item" className="cart-item__remove-item">
        <RemoveIcon />
      </button>
    </li>
  );
};

export default CartItem;
