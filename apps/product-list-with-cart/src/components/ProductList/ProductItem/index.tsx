import AddToCartButton from "./AddToCartButton";
import styles from "./ProductItem.styles";
import { MEDIA_QUERY } from "../../../hooks/useMediaQuery.hook";
import type { ProductItem } from "../../../hooks/useProductStore.hook";

const ProductItem: React.FC<ProductItem> = ({
  id,
  name,
  category,
  price,
  image,
  selected,
  quantity,
}) => {
  return (
    <li css={styles}>
      <figure>
        <div className="product-item__img-box" data-selected={selected}>
          <picture>
            <source srcSet={image.mobile} media={MEDIA_QUERY.mobile} />
            <source srcSet={image.tablet} media={MEDIA_QUERY.tablet} />
            <source srcSet={image.desktop} media={MEDIA_QUERY.desktop} />
            <img src={image.thumbnail} alt={name} />
          </picture>
          <AddToCartButton
            productItemId={id}
            productItemQuantity={quantity}
            productItemSelected={selected}
          />
        </div>
        <figcaption className="product-item__info">
          <span className="product-item__info__category">{category}</span>
          <strong className="product-item__info__name">{name}</strong>
          <span className="product-item__info__price">{`$${price}`}</span>
        </figcaption>
      </figure>
    </li>
  );
};

export default ProductItem;
