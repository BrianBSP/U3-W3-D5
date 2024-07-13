import { Card } from "react-bootstrap";

const MySong = ({ song }) => {
  return (
    <Card className="border-0 rounded-0 card-main">
      <Card.Img src={song.album.cover} alt={song.title} />
      <p className="text-white mb-0 mt-2 text-truncate">Track: {`"${song.title}"`}</p>
      <p className="text-white mb-0 text-truncate">Artist: {song.artist.name}</p>
    </Card>
  );
};
export default MySong;
