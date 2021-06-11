import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_CHECKLOGIN_FAIL,
  USER_CHECKLOGIN_REQUEST,
  USER_CHECKLOGIN_SUCCESS,
} from "../constants/userConstants";
import Cookie from "js-cookie";
import Axios from "axios";

const signup = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: user });
  try {
    const { data } = await Axios.post("/account/", user);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: true });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};

const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.get("/account/", {
      params: {
        username: username,
        password: password,
      },
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
    Cookie.set("access_token", data.access_token);
    Cookie.set("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const signout = () => async (dispatch) => {
  dispatch({ type: USER_SIGNOUT_REQUEST, payload: {} });
  try {
    Cookie.remove("access_token");
    Cookie.remove("userInfo");
    dispatch({ type: USER_SIGNOUT_SUCCESS, payload: true });
  } catch (error) {
    dispatch({ type: USER_SIGNOUT_FAIL, payload: error.message });
  }
};

const checklogin = () => async (dispatch) => {
  dispatch({ type: USER_CHECKLOGIN_REQUEST, payload: {} });
  try {
    const { data } = await Axios.get("/account/check-login/", {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    });
    dispatch({ type: USER_CHECKLOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_CHECKLOGIN_FAIL, payload: error.message });
  }
};

export { signup, signin, signout,checklogin };
