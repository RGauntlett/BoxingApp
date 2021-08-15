import { Container, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import TotalWorkOutContext from "../../store/TotalWorkOut-context";

const RoundCounter = (props) => {
  const workOutCtx = useContext(TotalWorkOutContext);

  let updatedRounds = 0;
  workOutCtx.workOuts.map(
    (workOut) => (updatedRounds = updatedRounds + workOut.amount)
  );

  const totalRounds = updatedRounds;
  return (
    <Container>
      <h2>Round:</h2>
      <p>{totalRounds}</p>
    </Container>
  );
};

export default RoundCounter;
