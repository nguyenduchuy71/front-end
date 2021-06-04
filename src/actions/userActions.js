import {
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
  } from "../constants/userConstants";
import Cookie from "js-cookie";
import Axios from "axios";

const signup = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: user });
    try {
      const { data } = await Axios.post("/account/", user );
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: true });
    } catch (error) {
      dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
    }
  };


const signin = (username,password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {username,password} });
    try {
      const { data } = await Axios.get("/account/",{
        params: {
          username: username,
          password: password,
        },
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
      console.log(data.user);
      Cookie.set("userInfo", JSON.stringify(data.user));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
};

export {signup,signin};