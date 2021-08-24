import { Container, Col } from "react-bootstrap";
import PageButton from "../UI/PageButton";
import { LinkContainer } from "react-router-bootstrap";
import TotalWorkOutCart from "../WorkOutPlanner/TotalWorkOutCart/TotalWorkOutCart";
import CreateRoundsList from "../MainTimer/CountDownTimer";
import styles from "./CustomWorkOutCard.module.css";
import Navbar from "../Navbar/Navbar";

const CustomWorkOutCard = (props) => {
  // const pauseWorkOutHandler = (props) => {
  //   alert("The Work Out has been paused. Please click to resume!");
  // };
  return (
    <Container>
      <Navbar />
      <Col md={6}>
        <CreateRoundsList />
        <TotalWorkOutCart />
        <div className={styles.ButtonGroup}>
          <LinkContainer to="/buildyourworkout">
            <PageButton>Edit WorkOut</PageButton>
          </LinkContainer>
          <LinkContainer to="/buildyourworkout">
            <PageButton>Stop WorkOut</PageButton>
          </LinkContainer>
        </div>
      </Col>
    </Container>
  );
};

export default CustomWorkOutCard;
