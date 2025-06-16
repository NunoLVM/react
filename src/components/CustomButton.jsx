export default function CustomButton({ text, bgColor }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}>
      {text}
    </button>
  );
}
