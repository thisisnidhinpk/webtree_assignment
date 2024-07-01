import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedin, loggedout } from "../features/auth/authSlice";
import { useState } from "react";

function Homepage() {
  const { user } = useSelector((state) => state.auth);
  return <div>Homepage:{user}</div>;
}

export default Homepage;
