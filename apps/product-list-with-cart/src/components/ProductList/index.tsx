import useMediaQueryWithEmotion from "../../hooks/useMediaQuery.hook";
import ProductItem from "./ProductItem";
import common from "./ProductList.common.styles";
import desktop from "./ProductList.desktop.styles";
import mobile from "./ProductList.mobile.styles";
import tablet from "./ProductList.tablet.styles";
import data from "../../data.json";

const ProductList: React.FC = () => {
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });
  return (
    <ul css={[common, style]}>
      {data.map((product, idx) => (
        <ProductItem key={`product-${idx}`} {...product} />
      ))}
    </ul>
  );
};

export default ProductList;
