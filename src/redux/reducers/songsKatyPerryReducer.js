import { GET_SONGS_KATY_PERRY } from "../actions";

const initialState = {
  data: [],
};

const songsKatyPerryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS_KATY_PERRY:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default songsKatyPerryReducer;
