import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourites";
import songsReducer from "../reducers/song";

const rootReducer = combineReducers({
  favourites: favouriteReducer,
  songs: songsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
