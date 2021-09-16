import { useRef, useState } from "react";
import PageButton from "../../../UI/PageButton";
import styles from "./WorkOutItemForm.module.css";
import Input from "../../../UI/Input";

const WorkOutItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const lengthInputRef = useRef();
  const restInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    const enteredLength = lengthInputRef.current.value;
    const enteredLengthNumber = +enteredLength;
    const enteredRest = restInputRef.current.value;
    const enteredRestNumber = +enteredRest;

    if (
      (enteredAmount.trim().length === 0 &&
        enteredLength.trim().length === 0 &&
        enteredRest.trim.length === 0) ||
      (enteredAmount < 1 && enteredLength < 1 && enteredRest < 0.5) ||
      (enteredAmount > 12 && enteredLength > 5 && enteredRest > 2)
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddWorkOut(
      enteredAmountNumber,
      enteredLengthNumber,
      enteredRestNumber
    );
  };

  return (
    <form className={styles.form}>
      <div>
        <Input
          ref={amountInputRef}
          label="Rounds: "
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "12",
            step: "1",
            defaultValue: "1",
          }}
        />
        <Input
          ref={lengthInputRef}
          label="Time: "
          input={{
            id: "length_" + props.id,
            type: "number",
            min: ".5",
            max: "5",
            step: ".5",
            defaultValue: "1",
          }}
        />
      </div>
      <div>
        <Input
          ref={restInputRef}
          label="Rest: "
          input={{
            id: "rest_" + props.id,
            type: "number",
            min: ".5",
            max: "2",
            step: ".5",
            defaultValue: ".5",
          }}
        />

        <PageButton className="px-3" onClick={submitHandler}>
          Add
        </PageButton>
      </div>
      {!amountIsValid && <p>Please Enter A Valid Amount (1-12)</p>}
    </form>
  );
};

export default WorkOutItemForm;
