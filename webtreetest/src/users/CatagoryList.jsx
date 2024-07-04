import React from "react";

function CatagoryList({ mylist }) {
  let loadCatagory = () => {
    alert("hkjh");
  };
  return (
    <div>
      <select className="form-control">
        {mylist.map((mycatagory, index) => (
          <option key={index}>${mycatagory.catagory}</option>
        ))}
        <option>kjkdjf</option>
      </select>
    </div>
  );
}

export default CatagoryList;
