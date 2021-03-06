import { Container, Col, Row } from "react-bootstrap";
import styles from "./AvailableWorkOuts.module.css";

import WorkOutItem from "./WorkOutItems/WorkOutItem";
const WorkOuts = [
  {
    id: "_" + Math.random().toString(36).substr(2, 9),
    type: "Basic Timer",
    description: "Basic boxing timer with warnings at 3 seconds",
  },
  {
    id: "_" + Math.random().toString(36).substr(2, 9),
    type: "Guided Shadow Boxing",
    description:
      "Basic boxing timer with random combinations called on screen for you to follow",
  },
  {
    id: "_" + Math.random().toString(36).substr(2, 9),
    type: "Guided Skipping",
    description:
      "Basic Boxing Timer with different skipping skills called for you to follow",
  },
  {
    id: "_" + Math.random().toString(36).substr(2, 9),
    type: "Split Rounds",
    description:
      "Basic Boxing Timer with a warning bell halfway through the round. Allows partners to change rolls during specific drills at the halfway point",
  },
];

const AvailableWorkOuts = () => {
  const workOutList = WorkOuts.map((workOut) => (
    <WorkOutItem
      id={workOut.id}
      key={workOut.id}
      type={workOut.type}
      description={workOut.description}
    />
  ));
  return (
    <Container className={styles.WorkOutItem}>
      <Row>
        <Col>
          <ul>{workOutList}</ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AvailableWorkOuts;
