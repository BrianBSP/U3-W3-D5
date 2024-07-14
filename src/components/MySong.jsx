import { Card } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavouriteaction, removeFromFavouriteAction, selectSongAction } from "../redux/actions";
import { StarFill } from "react-bootstrap-icons";

const MySong = ({ song }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.list);
  //console.log(favourites);

  const isFav = favourites.includes(song.title);
  console.log(isFav);

  //const songSelected = useSelector((state) => state.songSelected.songObj); //questo non s

  return (
    <Card className="border-0 rounded-0 card-main">
      <Card.Img
        onClick={() => dispatch(selectSongAction(song))}
        src={song.album.cover}
        alt={song.title}
        className="card-main-img"
      />
      <div className="text-center">
        {isFav ? (
          <StarFill onClick={() => dispatch(removeFromFavouriteAction(song.title))} color="gold"></StarFill>
        ) : (
          <Star onClick={() => dispatch(addToFavouriteaction(song.title))} color="gold"></Star>
        )}
      </div>
      <p className="text-white mb-0 mt-2 text-truncate">Track: {`"${song.title}"`}</p>
      <p className="text-white mb-0 text-truncate">Artist: {song.artist.name}</p>
    </Card>
  );
};
export default MySong;
