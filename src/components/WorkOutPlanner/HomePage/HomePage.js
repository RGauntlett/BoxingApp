import { Container, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PageButton from "../../UI/PageButton";
import WorkOuts from "../WorkOutBuilder/WorkOuts";
import TotalWorkOutCart from "../TotalWorkOutCart/TotalWorkOutCart";
import styles from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <Container>
      <Row>
        <Col className={styles.HomePage}>
          <div>
            <h1>Build Your Workout:</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <WorkOuts />
      </Row>

      <Row>
        <TotalWorkOutCart />
      </Row>
      <Row className={styles.NavigationButton}>
        <LinkContainer to="/TimerCard">
          <PageButton>Start WorkOut</PageButton>
        </LinkContainer>
        <LinkContainer to="/Information">
          <PageButton>Boxing Instructions</PageButton>
        </LinkContainer>
      </Row>
    </Container>
  );
};

export default HomePage;
