import PageButton from "../../UI/PageButton";
import styles from "./TotalWorkOutCart.module.css";

const TotalWorkOutCartItem = (props) => {
  return (
    <li>
      <div className={styles.TotalWorkOutCartItem}>
        <h3>{props.type}</h3>
        <p>Number of Rounds: {props.amount}</p>
        <p>Minutes Per Round: {props.lengthOfRounds}</p>

        <PageButton onClick={props.onRemove}>X</PageButton>
      </div>
    </li>
  );
};

export default TotalWorkOutCartItem;
