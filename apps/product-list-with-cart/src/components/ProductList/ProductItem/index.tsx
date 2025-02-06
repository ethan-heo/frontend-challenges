import AddToCartButton from "./AddToCartButton";
import styles from "./ProductItem.styles";
import { MEDIA_QUERY } from "../../../hooks/useMediaQuery.hook";

interface Props {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  selected?: boolean;
}

const ProductItem: React.FC<Props> = ({
  name,
  category,
  price,
  image,
  selected,
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
          <AddToCartButton />
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
