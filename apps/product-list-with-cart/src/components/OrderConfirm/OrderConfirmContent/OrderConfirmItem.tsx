import { OrderItem } from "../../../hooks/useCartStore.hook";
import { MEDIA_QUERY } from "../../../hooks/useMediaQuery.hook";
import transformPriceDecimal from "../../../utils/transformPriceDecimal.util";
import styles from "./OrderConfirmItem.styles";

const OrderConfirmItem: React.FC<OrderItem> = (orderItem) => {
  return (
    <li css={styles}>
      <div className="order-confirm-item__product">
        <picture className="order-confirm-item__product__image">
          <source
            srcSet={orderItem.productImage.mobile}
            media={MEDIA_QUERY.mobile}
          />
          <source
            srcSet={orderItem.productImage.tablet}
            media={MEDIA_QUERY.tablet}
          />
          <source
            srcSet={orderItem.productImage.desktop}
            media={MEDIA_QUERY.desktop}
          />
          <img
            src={orderItem.productImage.thumbnail}
            alt={orderItem.productName}
          />
        </picture>
        <div className="order-confirm-item__product__info">
          <strong className="order-confirm-item__product__info__name">
            {orderItem.productName}
          </strong>
          <div>
            <span className="order-confirm-item__product__info__quantity">{`${orderItem.productQuantity}x`}</span>
            <span className="order-confirm-item__product__info__price">{`@ $${transformPriceDecimal(orderItem.productPrice)}`}</span>
          </div>
        </div>
      </div>
      <strong className="order-confirm-item__total-price">{`$${transformPriceDecimal(orderItem.productPrice * orderItem.productQuantity)}`}</strong>
    </li>
  );
};

export default OrderConfirmItem;
