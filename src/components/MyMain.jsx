import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyMain = () => {
  const songs = useSelector((state) => state.songs.data);
  console.log(songs);
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={3}>
          {/* {songs.data.map(song=> (<))} */}
        </Col>
      </Row>
    </Container>
  );
};
export default MyMain;
