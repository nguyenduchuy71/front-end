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
  LOAD_COURSES_REQUEST,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_FAIL,
  LOAD_FORUMS_REQUEST,
  LOAD_FORUMS_SUCCESS,
  LOAD_FORUMS_FAIL,
  ADD_FORUM_REQUEST,
  ADD_FORUM_SUCCESS,
  ADD_FORUM_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../constants/userConstants";
import Cookie from "js-cookie";
import Axios from "axios";
import { URL_SERVER } from "../url";
const signup = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: user });
  try {
    await Axios.post(`${URL_SERVER}/account/create-user/`, user);
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: true });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};

const signin = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: user });
  try {
    const { data } = await Axios.post(`${URL_SERVER}/account/login/`, user);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
    Cookie.set("access_token", data.access_token);
    Cookie.set("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const signout = () => (dispatch) => {
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
    const { data } = await Axios.get(`${URL_SERVER}/account/check-login/`, {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    });
    dispatch({ type: USER_CHECKLOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_CHECKLOGIN_FAIL, payload: error.message });
  }
};

const loadCourses = () => async (dispatch) => {
  dispatch({ type: LOAD_COURSES_REQUEST, payload: true });
  try {
    const { data } = await Axios.get(`${URL_SERVER}/course/`);
    dispatch({ type: LOAD_COURSES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_COURSES_FAIL, payload: error.message });
  }
};

const loadForums = () => async (dispatch) => {
  dispatch({ type: LOAD_FORUMS_REQUEST, payload: {} });
  try {
    const { data } = await Axios.get(`${URL_SERVER}/forum/`);
    dispatch({ type: LOAD_FORUMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_FORUMS_FAIL, payload: error.message });
  }
};

const addForum = (value) => async (dispatch) => {
  dispatch({ type: ADD_FORUM_REQUEST, payload: {} });
  try {
    const { data } = await Axios.post(`${URL_SERVER}/forum/`, value, {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    });
    dispatch({ type: ADD_FORUM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_FORUM_FAIL, payload: error.message });
  }
};

const updateProfile = (value) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST, payload: {} });
  try {
    const { data } = await Axios.post(`${URL_SERVER}/account/update/`, value, {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    });
    Cookie.set("userInfo", JSON.stringify(data));
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.message });
  }
};

export {
  signup,
  signin,
  signout,
  checklogin,
  loadCourses,
  loadForums,
  addForum,
  updateProfile,
};
