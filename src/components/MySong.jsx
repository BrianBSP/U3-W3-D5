import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MySong = () => {
  const songs = useSelector((state) => state.songs.data);

  return (
    <Row>
      {songs.map((song) => (
        <Col xs={12} md={6} lg={3} key={song.id} className="g-2">
          <Card className="border-0">
            <Card.Img src={song.album.cover} alt={song.title} className="w-50" />
            <Card.Text>{song.title}</Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default MySong;
