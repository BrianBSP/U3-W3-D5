import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyLeftNav from "./components/MyLeftNav";
import MyMain from "./components/MyMain";
import MyFooterPlayer from "./components/MyFooterPlayer";
import DetailSong from "./components/DetailSong";
import FavouriteSong from "./components/FavouritesSong";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MyLeftNav />
      <Routes>
        <Route path="/" element={<MyMain />} />
        <Route path="detail/:song" element={<DetailSong />} />
        <Route path="preferiti" element={<FavouriteSong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooterPlayer />
    </BrowserRouter>
  );
}

export default App;
