import "./DateContainer.css";

function DateContainer(props) {
  const formatDate = (date) => {
    if (!(date instanceof Date)) return "";
    const zi = date.getDate();
    const luna = date.toLocaleString("ro-RO", { month: "short" });
    const an = date.getFullYear();
    return `${zi} ${luna} ${an}`;
  };

  return (
    <div className="due-date styled-date">
      <span className="date-label">Data limită:</span>
      <span className="date-value">{formatDate(props.date)}</span>
    </div>
  );
}

export default DateContainer;
