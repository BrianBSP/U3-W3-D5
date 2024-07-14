import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const DetailSong = () => {
  const songSelected = useSelector((state) => state.songSelected.songObj);

  return (
    <>
      <Row>
        <Col>
          <h1>
            Dettagli <strong>{songSelected.title}</strong>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img src={songSelected.album.cover_medium}></Card.Img>
            <Card.Text>Titolo: {songSelected.title}</Card.Text>
            <Card.Text>Artista: {songSelected.artist.name}</Card.Text>
            <Card.Text>Album: {songSelected.album.title}</Card.Text>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default DetailSong;
