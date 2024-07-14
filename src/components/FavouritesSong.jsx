import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import MyLeftNav from "./MyLeftNav";
import MySong from "./MySong";

const FavouriteSong = () => {
  const favourites = useSelector((state) => state.favourites.list);
  //const navigate = useNavigate();

  return (
    <Container>
      <MyLeftNav />
      <Row>
        <Col>
          <h2>Preferiti</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {favourites.map((song) => (
            <Col xs={12} md={6} lg={3} key={song.album.id} className="gy-2">
              <MySong song={song} />
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default FavouriteSong;
{
  /* <Card key={i} onClick={() => navigate(`/detail/${fav.title}`)}>
              <Card.Img src={fav.album.cover}></Card.Img>
              <Card.Text>{fav.title}</Card.Text>
            </Card> */
}
