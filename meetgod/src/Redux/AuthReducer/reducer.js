import * as types from "./actionTypes";

const token = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
  signupSuccess: false,
  isLoading: false,
  isError: false,
  token: token,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.POST_SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_SIGNUP_SUCCESS:
      return { ...state, isLoading: false, signupSuccess: payload };
    case types.POST_SIGNUP_ERROR:
      return { ...state, isLoading: false, isError: true };
    case types.POST_SIGNUP_RESET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signupSuccess: false,
      };

    case types.POST_LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.POST_LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload));
      return { ...state, isLoading: false, token: payload, isError: false };
    case types.POST_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: payload };
    default:
      return state;
  }
};
