import {
  ADMIN_GETUSERS_FAIL,
  ADMIN_GETUSERS_REQUEST,
  ADMIN_GETUSERS_SUCCESS,
} from "../constants/adminConstants";

function getUsersReducer(state = {}, action) {
  switch (action.type) {
    case ADMIN_GETUSERS_REQUEST:
      return { loadingGetUsers: true };
    case ADMIN_GETUSERS_SUCCESS:
      return { loadingGetUsers: false, users: action.payload };
    case ADMIN_GETUSERS_FAIL:
      return { loadingGetUsers: false, errorGetUsers: action.payload };
    default:
      return state;
  }
}
export { getUsersReducer };
