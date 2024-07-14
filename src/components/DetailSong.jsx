import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const DetailSong = () => {
  const songSelected = useSelector((state) => state.songSelected.songObj);

  return (
    <Container className="main-section">
      <Row>
        <Col>
          <h1 className="text-white">
            Dettagli di: <strong>{songSelected.title}</strong>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="card-detail text-white">
            <Card.Img src={songSelected.album.cover_medium} className="card-detail-img"></Card.Img>
            <Card.Text>Titolo: {songSelected.title}</Card.Text>
            <Card.Text>Artista: {songSelected.artist.name}</Card.Text>
            <Card.Text>Album: {songSelected.album.title}</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailSong;
