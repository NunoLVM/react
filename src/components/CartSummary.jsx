export default function CartSummary() {
  const unitPrice = 19.99;
  const quantity = 3;

  const totalPrice = (unitPrice * quantity).toFixed(2);

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <p>Unit Price: {unitPrice}€</p>
      <p>Quantity: {quantity}</p>
      <p>
        <strong>Total Payment: {totalPrice}€</strong>
      </p>
    </div>
  );
}
