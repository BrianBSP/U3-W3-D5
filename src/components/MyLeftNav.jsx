import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import "../index.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { getSearchSongAction } from "../redux/actions";

import { useDispatch } from "react-redux";
import { HouseFill } from "react-bootstrap-icons";
import { BookFill } from "react-bootstrap-icons";
const MyLeftNav = () => {
  const [query, setQuery] = useState("");

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
            <Link to="/" className="nav-link nav-item">
              <HouseFill className="me-2" />
              Home
            </Link>
            <Link to="/preferiti" className="nav-link">
              <BookFill className="me-2" />
              Your Library
            </Link>
          </ul>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormControl type="search" placeholder="Search.." value={query} onChange={handleChange} />
          <Button type="submit" variant="dark" className="input-group-append btn btn-outline-secondary btn-sm">
            GO
          </Button>
        </Form>
      </Container>
      <div>
        <Button variant="dark" className="btn signup-btn  ms-4" /* className="d-block mb-2 ms-4" */>
          Sing Up
        </Button>
        <Button variant="dark" className="btn login-btn ms-4" /* className="ms-4" */>
          Login
        </Button>
      </div>
    </div>
  );
};
export default MyLeftNav;
