import { FETCHING_CHARS, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  err: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
      return {
        ...state,
        error: "",
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        fetching: false,
        characters: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
