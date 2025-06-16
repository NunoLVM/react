export default function Quote() {
  const quote = "Success is falling seven times and getting up eight. – Japanese proverb";

  return (
    <div className="quote-container">
      <h1>Quote of the Day</h1>
      <p className="quote">{quote}</p>
    </div>
  );
}
