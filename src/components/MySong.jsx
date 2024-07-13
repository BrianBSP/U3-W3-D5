import { Card } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectSongAction } from "../redux/actions";

const MySong = ({ song }) => {
  const dispatch = useDispatch();

  //const songSelected = useSelector((state) => state.songSelected.songObj);

  return (
    <Card className="border-0 rounded-0 card-main">
      <Card.Img
        onClick={() => dispatch(selectSongAction(song))}
        src={song.album.cover}
        alt={song.title}
        className="card-main-img"
      />
      <div className="text-center">{<Star color="gold"></Star>}</div>
      <p className="text-white mb-0 mt-2 text-truncate">Track: {`"${song.title}"`}</p>
      <p className="text-white mb-0 text-truncate">Artist: {song.artist.name}</p>
    </Card>
  );
};
export default MySong;
