import AddToCartButton from "./AddToCartButton";
import styles from "./ProductItem.styles";
import { MEDIA_QUERY } from "../../../hooks/useMediaQuery.hook";
import {
  productItemStore,
  type ProductItem,
} from "../../../hooks/useProductStore.hook";
import { cartStore } from "../../../hooks/useCartStore.hook";
import transformPriceDecimal from "../../../utils/transformPriceDecimal.util";

const ProductItem: React.FC<ProductItem> = (productItem) => {
  return (
    <li css={styles}>
      <figure>
        <div
          className="product-item__img-box"
          data-selected={productItem.selected}
        >
          <picture>
            <source
              srcSet={productItem.image.mobile}
              media={MEDIA_QUERY.mobile}
            />
            <source
              srcSet={productItem.image.tablet}
              media={MEDIA_QUERY.tablet}
            />
            <source
              srcSet={productItem.image.desktop}
              media={MEDIA_QUERY.desktop}
            />
            <img src={productItem.image.thumbnail} alt={productItem.name} />
          </picture>
          <AddToCartButton
            productItemQuantity={productItem.quantity}
            productItemSelected={productItem.selected}
            select={() => {
              productItemStore.selectProductItem(productItem.id);
              cartStore.addOrderItem(productItem);
            }}
            increase={() => {
              const increasedQuantity = productItem.quantity + 1;

              productItemStore.updateProductItemQuantity(
                productItem.id,
                increasedQuantity,
              );
              cartStore.updateOrderItemQuantity(
                productItem.id,
                increasedQuantity,
              );
            }}
            decrease={() => {
              const decreasedQuantity = productItem.quantity - 1;

              productItemStore.updateProductItemQuantity(
                productItem.id,
                decreasedQuantity,
              );
              cartStore.updateOrderItemQuantity(
                productItem.id,
                decreasedQuantity,
              );
            }}
          />
        </div>
        <figcaption className="product-item__info">
          <span className="product-item__info__category">
            {productItem.category}
          </span>
          <strong className="product-item__info__name">
            {productItem.name}
          </strong>
          <span className="product-item__info__price">{`$${transformPriceDecimal(productItem.price)}`}</span>
        </figcaption>
      </figure>
    </li>
  );
};

export default ProductItem;
