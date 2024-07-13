import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MySong = () => {
  const songs = useSelector((state) => state.songs.data);

  return (
    <Container>
      <Row className="mt-4 ms-5">
        <Col>
          <h2 className="text-white">Risultato della ricerca: </h2>
        </Col>
      </Row>
      <Row>
        {songs.map((song) => (
          <Col xs={12} md={6} lg={3} key={song.id} className="gy-2">
            <Card className="border-0 rounded-0 card-main">
              <Card.Img src={song.album.cover} alt={song.title} />
              <p className="text-white mb-0 mt-2 text-truncate">Track: {`"${song.title}"`}</p>
              <p className="text-white mb-0 text-truncate">Artist: {song.artist.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MySong;
