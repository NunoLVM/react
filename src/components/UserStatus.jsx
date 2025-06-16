export default function UserStatus({ isOnline }) {
  return (
    <div className={`status-box ${isOnline ? "online" : "offline"}`}>
      {isOnline ? "🟢 The user is online" : "🔴 The user is offline"}
    </div>
  );
}
