import { Container, Col } from "react-bootstrap";
import PageButton from "../UI/PageButton";
import { LinkContainer } from "react-router-bootstrap";
import TotalWorkOutCart from "../WorkOutPlanner/TotalWorkOutCart/TotalWorkOutCart";
import CreateRoundsList from "../MainTimer/CountDownTimer";
import styles from "./CustomWorkOutCard.module.css";
const CustomWorkOutCard = (props) => {
  return (
    <Container>
      <Col md={6}>
        <CreateRoundsList />
        <TotalWorkOutCart />
        <div className={styles.ButtonGroup}>
          <LinkContainer to="/Home">
            <PageButton>Edit WorkOut</PageButton>
          </LinkContainer>
          <PageButton>Pause WorkOut</PageButton>
          <PageButton>Stop WorkOut</PageButton>
        </div>
      </Col>
    </Container>
  );
};

export default CustomWorkOutCard;
