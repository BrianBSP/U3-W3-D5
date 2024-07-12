import { ADD_TO_FAVOURITES } from "../actions";

const initialState = {
  list: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
  }
};
export default favouriteReducer;
