import ProductTitle from "./ProductTitle.jsx";
import ProductDescription from "./ProductDescription.jsx";
import BuyButton from "./BuyButton.jsx";

export default function Product() {
  return (
    <div className="product-container">
      <ProductTitle title="Smartphone X Pro" />
      <ProductDescription />
      <BuyButton />
    </div>
  );
}
