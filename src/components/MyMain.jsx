import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MySong from "./MySong";

const MyMain = () => {
  const songs = useSelector((state) => state.songs.data);
  console.log(songs);
  return (
    <Container className="main-section">
      <Row>
        <MySong />
      </Row>
    </Container>
  );
};
export default MyMain;
