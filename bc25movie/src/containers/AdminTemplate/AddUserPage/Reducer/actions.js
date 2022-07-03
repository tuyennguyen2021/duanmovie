import * as ActionType from "./constants";
import { api } from "../../../../utils/ApiUtils";

export const actAddUser = (user) => {
  return (dispatch) => {
    dispatch(actAddRequest());
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((res) => {
        dispatch(actAddSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actAddFail(err));
      });
  };
};

export const actAddRequest = () => {
  return {
    type: ActionType.ADD_REQUEST,
  };
};

export const actAddSuccess = (data) => {
  return {
    type: ActionType.ADD_SUCCESS,
    payload: data,
  };
};
export const actAddFail = (error) => {
  return {
    type: ActionType.ADD_FAIL,
    payload: error,
  };
};
