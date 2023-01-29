import "./Expensive.css";
import ExpensiveDate from "./ExpensiveDate";
function Expensive(props) {

    
  return (
    <div className="expense-item">
      <ExpensiveDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default Expensive;
