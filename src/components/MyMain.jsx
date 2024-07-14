import { Container, Row } from "react-bootstrap";

import MyMainLinks from "./MyMainLinks";
import MyRockClassic from "./MyRockClassic";
import MyPopCulture from "./MyPopCulture";
import MyHipHop from "./MyHipHop";
import MySongList from "./MySongList";

const MyMain = () => {
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
