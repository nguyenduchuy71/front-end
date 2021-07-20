import {
  ADMIN_DELETE_COURSE_FAIL,
  ADMIN_DELETE_COURSE_REQUEST,
  ADMIN_DELETE_COURSE_SUCCESS,
  ADMIN_ADD_COURSE_FAIL,
  ADMIN_ADD_COURSE_REQUEST,
  ADMIN_ADD_COURSE_SUCCESS,
  ADMIN_UPDATE_COURSE_FAIL,
  ADMIN_UPDATE_COURSE_REQUEST,
  ADMIN_UPDATE_COURSE_SUCCESS,
  ADMIN_DELETE_FORUM_FAIL,
  ADMIN_DELETE_FORUM_REQUEST,
  ADMIN_DELETE_FORUM_SUCCESS,
  ADMIN_LOAD_FORUM_FAIL,
  ADMIN_LOAD_FORUM_REQUEST,
  ADMIN_LOAD_FORUM_SUCCESS,
  ADMIN_LOAD_USERS_FAIL,
  ADMIN_LOAD_USERS_REQUEST,
  ADMIN_LOAD_USERS_SUCCESS,
} from "../constants/adminConstants";
import Cookie from "js-cookie";
import Axios from "axios";
import { URL_SERVER } from "../url";
const deleteCourse = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_DELETE_COURSE_REQUEST, payload: {} });
  try {
    const { data } = await Axios.delete(`${URL_SERVER}/course/`, {
      data: {
        id,
      },
    });
    dispatch({
      type: ADMIN_DELETE_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_DELETE_COURSE_FAIL, payload: error.message });
  }
};
const addCourse = (data) => async (dispatch) => {
  dispatch({ type: ADMIN_ADD_COURSE_REQUEST, payload: {} });
  try {
    const { new_data } = await Axios.post(`${URL_SERVER}/course/`, data);
    dispatch({
      type: ADMIN_ADD_COURSE_SUCCESS,
      payload: new_data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_ADD_COURSE_FAIL, payload: error.message });
  }
};
const updateCourse = (data) => async (dispatch) => {
  dispatch({ type: ADMIN_UPDATE_COURSE_REQUEST, payload: {} });
  try {
    const { new_data } = await Axios.put(`${URL_SERVER}/course/`, data);
    dispatch({
      type: ADMIN_UPDATE_COURSE_SUCCESS,
      payload: new_data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_UPDATE_COURSE_FAIL, payload: error.message });
  }
};
const deleteForum = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_DELETE_FORUM_REQUEST, payload: {} });
  try {
    const { data } = await Axios.delete(`${URL_SERVER}/forum/`, {
      data: {
        id,
      },
    });
    dispatch({
      type: ADMIN_DELETE_FORUM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ADMIN_DELETE_FORUM_FAIL, payload: error.message });
  }
};
const loadForums = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOAD_FORUM_REQUEST, payload: {} });
  try {
    await Axios.get(`${URL_SERVER}/account/check-login/`, {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    })
      .then((res) => {
        if (res.status === 200) {
          Axios.get(`${URL_SERVER}/forum/`, {
            headers: {
              Authorization: "Bearer " + Cookie.get("access_token"),
            },
          })
            .then((res) => {
              if (res.status === 200) {
                dispatch({
                  type: ADMIN_LOAD_FORUM_SUCCESS,
                  payload: res.data,
                });
              }
            })
            .catch((error) => console.log(error.message));
        }
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    dispatch({ type: ADMIN_LOAD_FORUM_FAIL, payload: error.message });
  }
};
const loadUsers = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOAD_USERS_REQUEST, payload: {} });
  try {
    await Axios.get(`${URL_SERVER}/account/check-login/`, {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    })
      .then((res) => {
        if (res.status === 200) {
          Axios.get(`${URL_SERVER}/account/get-all/`, {
            headers: {
              Authorization: "Bearer " + Cookie.get("access_token"),
            },
          })
            .then((res) => {
              if (res.status === 200) {
                dispatch({
                  type: ADMIN_LOAD_USERS_SUCCESS,
                  payload: res.data,
                });
              }
            })
            .catch((error) => console.log(error.message));
        }
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    dispatch({ type: ADMIN_LOAD_USERS_FAIL, payload: error.message });
  }
};

export {
  deleteCourse,
  addCourse,
  updateCourse,
  deleteForum,
  loadForums,
  loadUsers,
};
