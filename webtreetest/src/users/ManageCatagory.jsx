import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logoutbtn from "./Logoutbtn";
import axios from "axios";
import CatagoryList from "./CatagoryList";
function ManageCatagory() {
  const email = useSelector((state) => state.auth.UserEmail);
  const userfullname = useSelector((state) => state.auth.UserFullname);
  const [catagory, setCatagory] = useState();
  const [catagoryList, setCatagoryList] = useState([]);
  const [catagoryList1, setCatagoryList1] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  let loadCatagory = () => {
    // alert("hjh");
    //useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8000/api/loadCatagory",
        {
          email,
        },
        { headers }
      )
      .then((result) => {
        console.log(JSON.stringify(result.data));

        setCatagoryList(result.data);
        // if (result.data.status == 200) {
        //   alert(result.data.Msg);
        // }
      })
      .catch((err) => console.log("jjj" + err));
    // });
  };
  let updateCatagory = () => {
    var x = document.getElementById("sel1").value;

    setCatagory(x);

    var changecatagory = prompt("Change catagory name");

    if (changecatagory == null || changecatagory == "") {
      return;
    }
    alert(email + "," + catagory + "," + changecatagory);
    // useEffect(() => {

    axios
      .post(
        "http://127.0.0.1:8000/api/updateCatagory",
        {
          email,
          catagory,
          changecatagory,
        },
        { headers }
      )
      .then((result) => {
        console.log(JSON.stringify(result.data));
        setCatagoryList([]);
        setCatagoryList(result.data);
        // if (result.data.status == 200) {
        //   alert(result.data.Msg);
        // }
      })
      .catch((err) => console.log("jjj" + err));
    //});
  };
  let createCatagory = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/createCatagory",
        {
          email,
          catagory,
        },
        { headers }
      )
      .then((result) => {
        console.log(result.data);
        // if (result.data.status == 200) {
        //   alert(result.data.Msg);
        // }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4>ManageCatagory</h4>
      <div className="row">
        <div className="col-sm-3" style={{ backgroundColor: "aquamarine" }}>
          {/* <p>Lorem ipsum...</p> */}
        </div>
        <div className="col-sm-6" style={{ backgroundColor: "aquamarine" }}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email id"
              value={email}
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Catagory Name"
              onChange={(mycatagory) => {
                setCatagory(mycatagory.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={createCatagory}
            >
              <i className="fa fa-search"></i> Save
            </button>
          </div>
          <div className="form-group">
            {/* <input
              type="password"
              className="form-control"
              placeholder="Password (min 6 charracters)"
            /> */}
            <select id="sel1" className="form-control" onClick={loadCatagory}>
              {catagoryList.map((mycatagory, index) => (
                <option key={index} value={mycatagory.catagory}>
                  {mycatagory.catagory}
                </option>
              ))}
              {/* {catagoryList1.map((mycatagory1, index) => (
                <option key={index}>{mycatagory1.catagory}</option>
              ))} */}
            </select>
            {/* <CatagoryList
              className="form-control"
              onClick={loadCatagory}
              mycatagories={catagoryList}
            /> */}
            {/* <CatagoryList mylist={catagoryList}></CatagoryList> */}
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={updateCatagory}
            >
              <i className="fa fa-search"></i> Update Catagory
            </button>
          </div>
          <div className="form-group">
            {/* <button className="btn btn-secondary" type="button"> */}
            <Link to={"/manageCatagory"}>Manage Catagory</Link>|
            <Link to={"/"}>Manage Expences</Link>|
            <Link to={"/"}>Expence Summary</Link>
            <br></br>
            {/* <Link to={"/"}>SignOut</Link> */}
            <Logoutbtn></Logoutbtn>
            {/* </button> */}
          </div>
        </div>
        <div
          className="col-sm-3"
          style={{ backgroundColor: "aquamarine" }}
        ></div>
      </div>
    </div>
  );
}

export default ManageCatagory;
