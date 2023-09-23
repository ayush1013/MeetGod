import * as types from "./actionTypes";
import axios from "axios";

const userSignup = (userData) => (dispatch) => {
  dispatch({ type: types.POST_SIGNUP_REQUEST });
  axios
    .post("https://sleepy-clam-kimono.cyclic.app/user/signup", userData)
    .then((res) => {
      console.log(res);
      dispatch({type: types.POST.SIGNUP_SUCCESS, payload: res})
    })
    .catch((err) => {
      console.log(err);
      dispatch({type: types.POST.SIGNUP_ERROR})
    });
};
