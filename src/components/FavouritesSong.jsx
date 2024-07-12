import { Card, Col, Container, Row } from "react-bootstrap";
//import { Star } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavouriteSong = () => {
  const favourites = useSelector((state) => state.list.data);
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <h2>Preferiti</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {favourites.map((fav, i) => (
            <Card key={i} onClick={() => navigate(`/detail/${fav.title}`)}>
              <Card.Img src={fav.album.cover}></Card.Img>
              <Card.Text>{fav.title}</Card.Text>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default FavouriteSong;
