export default function StatusBox({ status }) {
  const statusStyles = {
    success: { 
      backgroundColor: "#28a745", 
      color: "white", padding: "15px", 
      borderRadius: "5px" 
    },
    warning: { 
      backgroundColor: "#ffc107", 
      color: "black", padding: "15px", 
      borderRadius: "5px" 
    },

    error: { 
      backgroundColor: "#dc3545", 
      color: "white", padding: "15px", 
      borderRadius: "5px" },
  };

  const currentStyle = statusStyles[status] || statusStyles.default;

  return <div style={currentStyle}>Statut : {status}</div>;
}
  

