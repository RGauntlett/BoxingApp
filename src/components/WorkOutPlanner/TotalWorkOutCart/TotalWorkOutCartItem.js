import PageButton from "../../UI/PageButton";
import styles from "./TotalWorkOutCart.module.css";

const TotalWorkOutCartItem = (props) => {
  return (
    <li>
      <div className={styles.TotalWorkOutCartItem}>
        <h3>{props.type}</h3>
        <p>Rounds: {props.amount}</p>
        <p>Time: {props.lengthOfRounds}</p>
        <p>Rest: {props.rest}</p>

        <PageButton onClick={props.onRemove}>X</PageButton>
      </div>
    </li>
  );
};

export default TotalWorkOutCartItem;
