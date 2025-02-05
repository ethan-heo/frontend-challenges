import AddToCartButton from "./AddToCartButton";

const ProductItem: React.FC = () => {
  return (
    <li>
      <figure>
        <div>
          <img src="" alt="" />
          <AddToCartButton />
        </div>
        <figcaption>
          <span>카테고리</span>
          <strong>제품 이름</strong>
          <span>제품 가격</span>
        </figcaption>
      </figure>
    </li>
  );
};

export default ProductItem;
