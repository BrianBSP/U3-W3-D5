import { Col, Row } from "react-bootstrap";

const DetailSong = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Dettagli {song.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </>
  );
};
export default DetailSong;
