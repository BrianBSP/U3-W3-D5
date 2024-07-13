import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourites";
import songsReducer from "../reducers/song";
import songsQueenReducer from "../reducers/songsQueenReducer";
import songsKatyPerryReducer from "../reducers/songsKatyPerryReducer";
import songsEminemReducer from "../reducers/songsEminemReducer";
import songSelectedReducer from "../reducers/songSelectedReducer";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  songs: songsReducer,
  rockSongs: songsQueenReducer,
  popSongs: songsKatyPerryReducer,
  hipHopSongs: songsEminemReducer,
  songSelected: songSelectedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
