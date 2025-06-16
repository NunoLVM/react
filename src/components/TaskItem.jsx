export default function TaskItem({ title, status }) {
  return (
    <div className={`task-item ${status}`}>
      <h3>{title}</h3>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}