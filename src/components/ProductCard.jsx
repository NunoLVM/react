export default function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>
        <strong>Price:</strong> {price.toFixed(2)}€
      </p>
      <p>{description}</p>
    </div>
  );
}
