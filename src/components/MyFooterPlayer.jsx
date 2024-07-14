import { Col } from "react-bootstrap";
import { SkipBackwardFill } from "react-bootstrap-icons";
import { SkipForwardFill } from "react-bootstrap-icons";
import { PlayFill } from "react-bootstrap-icons";
import { Repeat } from "react-bootstrap-icons";

import { Shuffle } from "react-bootstrap-icons";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MyFooterPlayer = () => {
  const songSelected = useSelector((state) => state.songSelected.songObj);
  const navigate = useNavigate();
  console.log(songSelected);

  return (
    <>
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100  justify-content-center align-items-center">
              {songSelected ? (
                <Col onClick={() => navigate(`/detail/${songSelected.title}`)} className="d-flex">
                  <div>
                    <img src={songSelected.album.cover_medium} alt={songSelected.title} width={80} />
                  </div>
                  <div>
                    <p className="text-white ms-2 mb-0 mt-2 text-truncate">Track: {`"${songSelected.title}"`}</p>
                    <p className="text-white ms-2 mb-0 text-truncate">Artist: {songSelected.artist.name}</p>
                  </div>
                </Col>
              ) : (
                <></>
              )}
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  {/* <a href="#"> */}
                  <Link className="nav-link text-white" to="/">
                    <Shuffle />
                  </Link>
                  {/* <img src="assets/playerbuttons/shuffle.png" alt="shuffle" /> */}
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <Link className="nav-link text-white" to="/">
                    <SkipBackwardFill />
                  </Link>
                  {/* <img src="assets/playerbuttons/prev.png" alt="prev" /> */}
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <Link className="nav-link text-white" to="/">
                    <PlayFill />
                  </Link>
                  {/* <img src="assets/playerbuttons/play.png" alt="play" /> */}
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <Link className="nav-link text-white" to="/">
                    <SkipForwardFill />
                  </Link>
                  {/* <img src="assets/playerbuttons/next.png" alt="next" /> */}
                  {/* </a> */}
                  {/* <a href="#"> */}
                  <Link className="nav-link text-white" to="/">
                    <Repeat />
                  </Link>
                  {/* <img src="assets/playerbuttons/repeat.png" alt="repeat" /> */}
                  {/* </a> */}
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyFooterPlayer;
