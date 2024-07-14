import { Container } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

const NotFound = () => {
  return (
    <Container className="d-flex justify-content-center">
      <h1>NOT FOUND Error 404</h1>
      <Link to="/" className="btn signup-btn ">
        Home
      </Link>
    </Container>
  );
};
export default NotFound;
