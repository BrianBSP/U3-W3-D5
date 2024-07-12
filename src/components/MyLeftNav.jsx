import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import "../index.css";
import { House } from "react-bootstrap-icons";
import { Book } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getSearchSongAction } from "../redux/actions";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const MyLeftNav = () => {
  const [query, setQuery] = useState("");

  //const songs = useSelector((state) => state.songs.data);
  const dispatch = useDispatch();

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getSearchSongAction(query));
  };

  return (
    <div className="navbar fixed-left text-white">
      <Container className="d-flex flex-column align-items-start ms-1 mt-3 g-3 gap-3">
        <div>
          <img src="../public/logo.png" width={150}></img>
        </div>
        <div>
          <ul>
            <Link to="/" className="nav-link">
              <House className="me-2" />
              Home
            </Link>
            <Link className="nav-link">
              <Book className="me-2" />
              Your Library
            </Link>
          </ul>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormControl type="search" placeholder="Search.." value={query} onChange={handleChange} />
          <Button type="submit" variant="dark">
            GO
          </Button>
        </Form>
      </Container>
      <div>
        <Button variant="dark" className="d-block mb-2 ms-4">
          Sing Up
        </Button>
        <Button variant="dark" className="ms-4">
          Login
        </Button>
      </div>
    </div>
  );
};
export default MyLeftNav;
