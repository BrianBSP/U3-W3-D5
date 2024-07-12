import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyLeftNav from "./components/MyLeftNav";
import MyMain from "./components/MyMain";
import MyFooterPlayer from "./components/MyFooterPlayer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyLeftNav />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/footplayer/:song" element={<MyFooterPlayer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
