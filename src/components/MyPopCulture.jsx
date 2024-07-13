import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getPopSongsAction } from "../redux/actions";
import { Card, Col, Container, Row } from "react-bootstrap";

const MyPopCulture = () => {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.popSongs.data);

  useEffect(() => {
    dispatch(getPopSongsAction());
  }, [dispatch]);

  return (
    <Container>
      <Row className="mt-4 ms-5">
        <Col>
          <h2 className="text-white">Pop Culture</h2>
        </Col>
      </Row>
      <Row>
        {songs.slice(0, 4).map((song) => (
          <Col key={song.album.id}>
            <Card className="border-0 rounded-0 card-main">
              <Card.Img className="rounded-0 img-fluid" width={200} src={song.album.cover_medium}></Card.Img>
              <p className="text-white mb-0 mt-2 text-truncate">Track: "{song.title}"</p>
              <p className="text-white mb-0 text-truncate">Artist: {song.artist.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MyPopCulture;