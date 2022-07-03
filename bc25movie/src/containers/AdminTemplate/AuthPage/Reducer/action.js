import axios from "axios";
import { Action } from "history";
import { data } from "jquery";
import userEvent from "@testing-library/user-event";
import { api } from "utils/ApiUtils";
import * as ActionType from "./constant";

export const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //   method: "POST",
    //   data: user,
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo",
    //   },
    // })

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((res) => {
        //check maloainguoidung
        if (res.data.content.maLoaiNguoiDung === "KhachHang") {
          //bao loi
          return Promise.reject({
            response: {
              data: {
                content: "Tai khoan khong co quyen truy cap",
              },
            },
          });
        }
        dispatch(actAuthSuccess(res.data.content));
        // luu thong tin  user xuong localStorage
        localStorage.setItem("UserAdmin", JSON.stringify(res.data.content));
        //redirect to admin
        navigate("/admin", { replace: true });
      })
      .catch((err) => {
        dispatch(actAuthFail(err));
      });
  };
};

export const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
    payload: data,
  };
};

export const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

export const actAuthFail = (error) => {
  return {
    type: ActionType.AUTH_FAIL,
    payload: error,
  };
};
