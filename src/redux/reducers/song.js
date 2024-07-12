import { GET_SONGS } from "../actions";

const initialState = {
  data: null,
};
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        data: action.payload,
      };
  }
};

export default songsReducer;
