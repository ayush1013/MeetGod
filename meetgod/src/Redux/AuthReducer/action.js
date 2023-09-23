import * as types from "./actionTypes";
import axios from "axios";

export const userSignupPost = (userData) => (dispatch) => {
  dispatch({ type: types.POST_SIGNUP_REQUEST });
  axios
    .post("https://sleepy-clam-kimono.cyclic.app/user/signup", userData)
    .then((res) => {
      console.log(res);
      console.log("res from action", res);
      dispatch({type: types.POST_SIGNUP_SUCCESS, payload: res.data.message})
    })
    .catch((err) => {
      console.log(err);
      dispatch({type: types.POST_SIGNUP_ERROR})
    });
};
