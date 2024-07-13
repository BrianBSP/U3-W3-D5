import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import MyMainLinks from "./MyMainLinks";
import MyRockClassic from "./MyRockClassic";
import MyPopCulture from "./MyPopCulture";
import MyHipHop from "./MyHipHop";
import MySongList from "./MySongList";

const MyMain = () => {
  const songs = useSelector((state) => state.songs.data);
  console.log(songs);
  return (
    <Container className="main-section">
      <Row>
        <MyMainLinks />
      </Row>
      <Row>
        {/* rock classic "queen*/}
        <MyRockClassic />
      </Row>
      <Row>
        {/* pop culture "katy pery" */}
        <MyPopCulture />
      </Row>
      <Row>
        {/* HipHop "eminem" */}
        <MyHipHop />
      </Row>
      <Row>
        <MySongList />
      </Row>
    </Container>
  );
};
export default MyMain;
