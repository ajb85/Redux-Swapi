// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARS = "FETCHING";
export const FETCH_SUCCESS = "SUCCESS";
export const FETCH_FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchingChars = () => dispatch => {
  dispatch({ type: FETCHING_CHARS });
  const url = "https://swapi.co/api/people/";
  axios
    .get(url)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      /*dispatch({type: FETCH_FAILURE, payload:})*/
      console.log("FETCH ERROR: ", err);
    });
};
