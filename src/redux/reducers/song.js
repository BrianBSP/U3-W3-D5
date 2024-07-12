import { GET_SONGS } from "../actions";

const initialState = {
  data: [],
};
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default songsReducer;
