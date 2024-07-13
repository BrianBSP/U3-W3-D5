import { GET_SONGS_QUEEN } from "../actions";

const initialState = {
  data: [],
};

const songsQueenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS_QUEEN:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default songsQueenReducer;
