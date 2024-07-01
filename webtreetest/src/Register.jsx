import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [email, setMyemail] = useState();
  const [fullname, setMyname] = useState();
  const [password, setMypassword] = useState();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  let registerUser = () => {
    if (email == null || name == null || password == null) {
      alert("check inputs");
      return;
    }
    axios
      .post(
        "http://127.0.0.1:8000/api/userRegister",
        {
          email,
          fullname,
          password,
        },
        { headers }
      )
      .then((result) => {
        console.log(result.data);
        if (result.data.status == 200) {
          alert(result.data.Msg);
        }
        //: alert(result.data.Msg);
        //navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4>Register</h4>
      <div className="row">
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
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(myname) => {
                setMyname(myname.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password (min 6 charracters)"
              onChange={(mypwd) => {
                setMypassword(mypwd.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={registerUser}
            >
              <i className="fa fa-search"></i> Sign Up
            </button>
          </div>
          <div className="form-group">
            {/* <button className="btn btn-secondary" type="button"> */}
            <Link to={"/"}>Already User? Signin</Link>
            {/* </button> */}
          </div>
        </div>
        <div
          className="col-sm-4"
          style={{ backgroundColor: "aquamarine" }}
        ></div>
      </div>
    </div>
  );
}

export default Register;
