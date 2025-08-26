import "./Badge.css";

function Badge(props) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case "Todo":
        return { backgroundColor: "#ffe082", color: "#795548" };
      case "In Progress":
        return { backgroundColor: "#81d4fa", color: "#0277bd" };
      case "Done":
        return { backgroundColor: "#c8e6c9", color: "#388e3c" };
      default:
        return { backgroundColor: "#f2f2f2", color: "#808080" };
    }
  };

  return (
    <div className="badge" style={getBadgeStyle(props.status)}>
      <p style={{ color: getBadgeStyle(props.status).color }}>{props.status}</p>
    </div>
  );
}

export default Badge;
