import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loggedin, loggedout } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
function Logoutbtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let lout = () => {
    alert("kjjk");
    dispatch(loggedout());
    navigate("/");
  };
  return (
    <div>
      <div className="form-group">
        <button className="btn btn-secondary" type="button" onClick={lout}>
          <i className="fa fa-search"></i> Sign Out
        </button>
      </div>
    </div>
  );
}

export default Logoutbtn;
