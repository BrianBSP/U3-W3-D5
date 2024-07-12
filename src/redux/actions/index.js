export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const GET_SONGS = "GET_SONGS";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

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
        /* let musicSection = document.querySelector(querySelector);
        for (let i = 0; i < 4; i++) {
          musicSection.innerHTML += albumCard(data[i]);
        } */
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
