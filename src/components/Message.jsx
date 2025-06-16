export default function Message({ text, type }) {
  let MessageType = "message";

  if (type === "info") MessageType += " message-info";
  else if (type === "alert") MessageType += " message-alert";
  else if (type === "success") MessageType += " message-success";
  
  return <div className={MessageType}>{text}</div>;
}

