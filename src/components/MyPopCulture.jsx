import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getPopSongsAction } from "../redux/actions";
import { Col, Container, Row } from "react-bootstrap";
import MySong from "./MySong";

const MyPopCulture = () => {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.popSongs.data);

  console.log(songs);

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
          <Col xs={12} sm={6} lg={3} key={song.album.id} className="gy-2">
            <MySong song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MyPopCulture;
