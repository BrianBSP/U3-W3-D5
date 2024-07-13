export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const GET_SONGS = "GET_SONGS";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SONGS_QUEEN = "GET_SONGS_QUEEN";
export const GET_SONGS_KATY_PERRY = "GET_SONGS_KATY_PERRY";
export const GET_SONGS_EMINEM = "GET_SONGS_EMINEM";
export const GET_SELECTED_ON = "GET_SELECTED_ON";
export const GET_SELECTED_OFF = "GET_SELECTED_OFF";
export const SELECT_SONG = "SELECT_SONG";

export const getSearchSongAction = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query);
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const getRockSongsAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
      if (resp.ok) {
        let { data } = await resp.json();
        dispatch({
          type: GET_SONGS_QUEEN,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const getPopSongsAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=katyperry");
      if (resp.ok) {
        let { data } = await resp.json();
        dispatch({
          type: GET_SONGS_KATY_PERRY,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getHipHopSongsAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem");
      if (resp.ok) {
        let { data } = await resp.json();
        dispatch({
          type: GET_SONGS_EMINEM,
          payload: data,
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const selectSongAction = (song) => ({ type: SELECT_SONG, payload: song });
