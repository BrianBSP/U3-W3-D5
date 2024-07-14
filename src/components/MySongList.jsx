import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MySong from "./MySong";

const MySongList = () => {
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
          <Col xs={12} md={6} lg={3} key={song.album.id} className="gy-2">
            <MySong song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MySongList;
