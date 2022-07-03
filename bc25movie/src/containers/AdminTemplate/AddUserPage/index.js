import React, { useState } from "react";
import { actAddUser } from "./Reducer/actions";
import { useSelector, useDispatch } from "react-redux";

export default function AddUserPage() {
  const props = useSelector((state) => state.addReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    hoTen: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  };
  return (
    <div className="container">
      <h1>Add User</h1>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label> UserName</label>
              <input
                type="text"
                name="taiKhoan"
                onChange={handleOnChange}
                className="form-control"
              />
              <label> PassWord</label>
              <input
                type="text"
                name="matKhau"
                onChange={handleOnChange}
                className="form-control"
              />
              <label> Email</label>
              <input
                type="text"
                name="email"
                onChange={handleOnChange}
                className="form-control"
              />
              <label> Số Điện Thoại</label>
              <input
                type="text"
                name="soDt"
                onChange={handleOnChange}
                className="form-control"
              />
              <label> Họ Tên</label>
              <input
                type="text"
                name="hoTen"
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">ADD USER</button>
          </form>
        </div>
      </div>
    </div>
  );
}
