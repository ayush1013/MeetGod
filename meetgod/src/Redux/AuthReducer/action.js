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

export const userLoginPost = (userData) => (dispatch) => {
  dispatch({ type: types.POST_LOGIN_REQUEST });
  axios
    .post("https://sleepy-clam-kimono.cyclic.app/user/login", userData)
    .then((res) => {
      console.log(res);
      console.log("res from action", res);
      dispatch({type: types.POST_LOGIN_SUCCESS, payload: res.data.token})
    })
    .catch((err) => {
      console.log(err);
      dispatch({type: types.POST_LOGIN_ERROR, payload: err.response.data.message})
    });
};

