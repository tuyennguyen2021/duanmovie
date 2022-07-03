import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actLogin } from "./Reducer/action";
import { Navigate, useNavigate } from "react-router-dom"; // hook giup chuyen huong trang, hook usenavigate chi import tu component tu react

export default function AuthPage() {
  const props = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props);
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actLogin(state, navigate));
  };

  if (props.loading) {
    return <div className="container">...loading</div>;
  }
  console.log(state);

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  if (localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/admin" />;
  return (
    <div className="container">
      <h1>AuthPage</h1>
      <div className="row">
        <div className="col-md-6">
          {/* //render show error */}
          {renderNoti()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label> UserName</label>
              <input
                type="text"
                name="taiKhoan"
                onChange={handleOnchange}
                className="form-control"
              />
              <label> PassWord</label>
              <input
                type="text"
                name="matKhau"
                onChange={handleOnchange}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
