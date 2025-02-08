import ProductItem from "./ProductItem";
import common from "./ProductList.common.styles";
import desktop from "./ProductList.desktop.styles";
import mobile from "./ProductList.mobile.styles";
import tablet from "./ProductList.tablet.styles";
import useProductItemStore, {
  productItemStore,
} from "../../hooks/useProductStore.hook";
import { useEffect } from "react";
import useMediaQuery from "use-media-query";

const ProductList: React.FC = () => {
  const style = useMediaQuery({
    mobile,
    tablet,
    desktop,
  });
  const productItems = useProductItemStore();

  useEffect(() => {
    productItemStore.init();
  }, []);

  return (
    <ul css={[common, style]}>
      {productItems.map((productItem) => (
        <ProductItem key={`product-${productItem.id}`} {...productItem} />
      ))}
    </ul>
  );
};

export default ProductList;
