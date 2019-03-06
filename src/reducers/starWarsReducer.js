import { FETCHING, SUCCESS, FAILURE } from "../actions";
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
    case FETCHING:
      console.log("Fetching", state);
      return {
        ...state,
        error: "",
        fetching: true
      };
    case SUCCESS:
      console.log("Fetch Success");
      return {
        ...state,
        error: "",
        fetching: false,
        characters: action.payload
      };

    case FAILURE:
      console.log("Fetch Failure");
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
