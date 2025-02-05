import useMediaQueryWithEmotion from "../../hooks/useMediaQuery.hook";
import ProductItem from "./ProductItem";
import common from "./ProductList.common.styles";
import desktop from "./ProductList.desktop.styles";
import mobile from "./ProductList.mobile.styles";
import tablet from "./ProductList.tablet.styles";

const ProductList: React.FC = () => {
  const style = useMediaQueryWithEmotion({
    mobile,
    tablet,
    desktop,
  });
  return (
    <ul css={[common, style]}>
      <ProductItem />
    </ul>
  );
};

export default ProductList;
