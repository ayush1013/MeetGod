import * as types from "./actionTypes";

const initialState = {
  signupSuccess: false,
  isLoading: false,
  isError: false,
  token: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (tyoe) {
    case types.POST_SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_SIGNUP_SUCCESS:
      return { ...state, isLoading: false, signupSuccess: payload };
    case types.POST_SIGNUP_ERROR:
      return { ...state, isLoading: false, isError: true };

    case types.POST_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: payload };
    case types.POST_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
