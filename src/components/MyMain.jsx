import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MySong from "./MySong";
import MyMainLinks from "./MyMainLinks";
import MyRockClassic from "./MyRockClassic";
import MyPopCulture from "./MyPopCulture";

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
      <Row>{/* HipHop "eminem" */}</Row>
      <Row>
        <MySong />
      </Row>
    </Container>
  );
};
export default MyMain;
