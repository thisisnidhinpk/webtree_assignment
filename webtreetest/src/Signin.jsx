import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedin, loggedout } from "./features/auth/authSlice";
import { useState } from "react";
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};
function Signin() {
  const [email, setMyemail] = useState();
  const [fullnamename, setMyfullname] = useState();
  const [password, setMypassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let loginCheck = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/login",
        {
          email,
          password,
        },
        { headers }
      )
      .then((result) => {
        console.log(result.data);
        dispatch(loggedin(result.data.email));
        navigate("/dashboard");
        // if (result.data.userroll === "user") {
        //   setUser(result.data.id);

        //   navigate("/user-dashboard");
        // } else if (result.data.userroll === "admin") {
        //   setUser(result.data.id);
        //   navigate("/admin-dashboard");
        // } else if (result.data.userroll === "") {
        //   alert("login failed ...Invalid credentials");
        // }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <h4>Signin</h4>
      <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
        {/* <p>Lorem ipsum...</p> */}
      </div>
      <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email id"
            onChange={(mymail) => {
              setMyemail(mymail.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(mypwd) => {
              setMypassword(mypwd.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={loginCheck}
          >
            <i className="fa fa-search"></i> Sign
          </button>
        </div>
        <div className="form-group">
          <Link to={"/register"}>New User? Register</Link>
        </div>
      </div>
      <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}></div>
    </div>
  );
}

export default Signin;
