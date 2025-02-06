import styles from "./CartAd.styles";
import AdIcon from "../../assets/images/icon-carbon-neutral.svg?react";

const CartAd: React.FC = () => {
  return (
    <div css={styles}>
      <AdIcon />
      <p className="cart-ad__desc">
        This is a <span className="cart-ad--highlight">carbon-neutral</span>{" "}
        delivery
      </p>
    </div>
  );
};

export default CartAd;
