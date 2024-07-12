import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyLeftNav from "./components/MyLeftNav";
import MyMain from "./components/MyMain";
import MyFooterPlayer from "./components/MyFooterPlayer";
import DetailSong from "./components/DetailSong";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyLeftNav />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="dettagli" element={<DetailSong />} />
          <Route path="/footplayer/:song" element={<MyFooterPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
