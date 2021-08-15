import { Container, Col, Row } from "react-bootstrap";

import AvailableWorkOuts from "./AvailableWorkOuts";

const WorkOuts = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <AvailableWorkOuts />
        </Col>
      </Row>
    </Container>
  );
};

export default WorkOuts;
