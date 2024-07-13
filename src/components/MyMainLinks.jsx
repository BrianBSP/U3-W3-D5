import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyMainLinks = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col className="d-flex gap-5 text-secondary justify-content-center">
          <Link className="nav-link" to="#">
            TRENDING
          </Link>
          <Link className="nav-link" to="#">
            PODCAST
          </Link>
          <Link className="nav-link" to="#">
            MOODS AND GENRES
          </Link>
          <Link className="nav-link" to="#">
            NEW RELEASES
          </Link>
          <Link className="nav-link" to="#">
            DISCOVER
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default MyMainLinks;
