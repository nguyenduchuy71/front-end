import {
  ADMIN_GETUSERS_FAIL,
  ADMIN_GETUSERS_REQUEST,
  ADMIN_GETUSERS_SUCCESS,
} from "../constants/adminConstants";
import Cookie from "js-cookie";
import Axios from "axios";

const getusers = () => async (dispatch) => {
  dispatch({ type: ADMIN_GETUSERS_REQUEST, payload: {} });
  try {
    const { data } = await Axios.get("/account/get-all/", {
      headers: { Authorization: "Bearer " + Cookie.get("access_token") },
    });
    dispatch({
      type: ADMIN_GETUSERS_SUCCESS,
      payload: data.filter((row) => row.is_staff === false),
    });
  } catch (error) {
    dispatch({ type: ADMIN_GETUSERS_FAIL, payload: error.message });
  }
};
export { getusers };
