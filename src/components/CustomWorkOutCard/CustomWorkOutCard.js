import { Container, Col } from "react-bootstrap";
import PageButton from "../UI/PageButton";
import ComboReader from "../ComboReader/ComboReader";
import { LinkContainer } from "react-router-bootstrap";
import TotalWorkOutCart from "../WorkOutPlanner/TotalWorkOutCart/TotalWorkOutCart";
import RoundCounter from "./RoundCounter";
import CreateRoundsList from "../MainTimer/CountDownTimer";

const CustomWorkOutCard = (props) => {
  return (
    <Container>
      <Col md={6}>
        <ComboReader timePerCombo={{ seconds: 1000 }} />

        <CreateRoundsList />
        <TotalWorkOutCart />
        <LinkContainer to="/Home">
          <PageButton>Edit WorkOut</PageButton>
        </LinkContainer>
        <PageButton>Pause WorkOut</PageButton>
        <PageButton>Stop WorkOut</PageButton>
      </Col>
    </Container>
  );
};

export default CustomWorkOutCard;
