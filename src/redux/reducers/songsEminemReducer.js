import { GET_SONGS_EMINEM } from "../actions";

const initialState = {
  data: [],
};

const songsEminemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS_EMINEM:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default songsEminemReducer;
