import { useRef, useState } from "react";
import PageButton from "../../../UI/PageButton";
import styles from "./WorkOutItemForm.module.css";
import Input from "../../../UI/Input";

const WorkOutItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const lengthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    const enteredLength = lengthInputRef.current.value;
    const enteredLengthNumber = +enteredLength;

    if (
      (enteredAmount.trim().length === 0 &&
        enteredLength.trim().length === 0) ||
      (enteredAmountNumber < 1 && enteredLength < 1) ||
      (enteredAmountNumber > 12 && enteredLength > 5)
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddWorkOut(enteredAmountNumber, enteredLengthNumber);
  };

  return (
    <form className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Number of Rounds: "
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
        label="Length of Rounds: "
        input={{
          id: "length_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: ".5",
          defaultValue: "1",
        }}
      />

      <PageButton className="px-3" onClick={submitHandler}>
        Add
      </PageButton>
      {!amountIsValid && <p>Please Enter A Valid Amount (1-12)</p>}
    </form>
  );
};

export default WorkOutItemForm;
