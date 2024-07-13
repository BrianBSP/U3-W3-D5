import { SELECT_SONG } from "../actions";

const initialState = {
  songObj: null,
};

const songSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        songObj: action.payload,
      };

    default:
      return state;
  }
};

export default songSelectedReducer;
