const CartItem: React.FC = () => {
  return (
    <li>
      <div>
        <strong>제품 이름</strong>
        <div>
          <span>제품 갯수</span>
          <span>@ 제품 가격</span>
          <span>제품 총 가격</span>
        </div>
      </div>
      <div>닫기 icon</div>
    </li>
  );
};

export default CartItem;
