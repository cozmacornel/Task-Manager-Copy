import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {
  return (
    <div className="card-wrapper">
      <div className="card-top-line" />
      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>
  <div className="card-content">
  </div>
      <div className="card-footer">
        <DateContainer date={props.dueDate} />
      </div>
      <div className="card-text-below">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default TaskCard;
