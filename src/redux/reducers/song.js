import { GET_SELECTED_OFF, GET_SELECTED_ON, GET_SONGS } from "../actions";

const initialState = {
  data: [],
  selected: false,
};
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_SELECTED_ON:
      return {
        ...state,
        selected: true,
      };
    case GET_SELECTED_OFF:
      return {
        ...state,
        selected: false,
      };

    default:
      return state;
  }
};

export default songsReducer;
