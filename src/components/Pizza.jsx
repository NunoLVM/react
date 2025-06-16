export default function Pizza() {
  const name = "Pizza Margherita";
  const size = "Medium";
  const price = 12.99;

  const description = `The ${name} (${size}) is available for just ${price}€!`;

  return (
    <section className="pizza-container">
      <h2>Today's Special</h2>
      <p className="pizza-description">{description}</p>
    </section>
  );
}
