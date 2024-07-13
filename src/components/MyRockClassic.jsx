import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRockSongsAction } from "../redux/actions";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MySong from "./MySong";

const MyRockClassic = () => {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.rockSongs.data);

  useEffect(() => {
    dispatch(getRockSongsAction());
  }, [dispatch]);

  return (
    <Container>
      <Row className="mt-4 ms-5">
        <Col>
          <h2 className="text-white">Rock Classic</h2>
        </Col>
      </Row>
      <Row>
        {songs.slice(0, 4).map((song) => (
          <Col xs={12} sm={6} lg={3} key={song.album.id} className="gy-2">
            <MySong song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MyRockClassic;
