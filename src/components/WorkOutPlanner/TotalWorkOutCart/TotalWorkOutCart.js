import { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import TotalWorkOutContext from "../../../store/TotalWorkOut-context";
import TotalWorkOutCartItem from "./TotalWorkOutCartItem";
import styles from "./TotalWorkOutCart.module.css";

const TotalWorkOutCart = (props) => {
  const workOutCtx = useContext(TotalWorkOutContext);
  const hasWorkOuts = workOutCtx.workOuts.length > 0;

  console.log(workOutCtx.workOuts[0]);

  const workOutCartRemoveHandler = (id) => {
    workOutCtx.removeWorkOut(id);
  };

  const totalWorkOutItems = (
    <ul>
      {workOutCtx.workOuts.map((workOut) => (
        <TotalWorkOutCartItem
          key={workOut.id}
          type={workOut.type}
          amount={workOut.amount}
          lengthOfRounds={workOut.lengthOfRounds}
          rest={workOut.rest}
          onRemove={workOutCartRemoveHandler.bind(null, workOut.id)}
        />
      ))}
    </ul>
  );

  return (
    <Container className={styles.TotalWorkOutCart}>
      <h2>Your Total WorkOut:</h2>
      {totalWorkOutItems}
      <Row>
        <Col>
          {!hasWorkOuts && (
            <p>Select and combine workouts to build your custom routine</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TotalWorkOutCart;
