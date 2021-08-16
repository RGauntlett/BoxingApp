import { useContext } from "react";
import TotalWorkOutContext from "../../../../store/TotalWorkOut-context";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./WorkOutItem.module.css";
import WorkOutItemForm from "./WorkOutItemForm";

const WorkOutItem = (props) => {
  const workOutCtx = useContext(TotalWorkOutContext);

  const addToTotalWorkOutHandler = (amount, lengthOfRounds, rest) => {
    workOutCtx.addWorkOut({
      id: props.id,
      type: props.type,
      amount: amount,
      lengthOfRounds: lengthOfRounds,
      rest: rest,
      description: props.description,
    });
  };
  return (
    <li>
      <Container>
        <Row>
          <Col md={6} className={styles.WorkOutItem}>
            <h3>{props.type}</h3>
            <p>{props.description}</p>
          </Col>
          <Col md={6}>
            <WorkOutItemForm
              id={props.id}
              onAddWorkOut={addToTotalWorkOutHandler}
            />
          </Col>
        </Row>
      </Container>
    </li>
  );
};

export default WorkOutItem;
