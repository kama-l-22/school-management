import React from "react";
import serachIcon from "../asset/icons8-search-50.png";
import Student from "./student";
import AddStudentModal from "../modals/addStudentModal";
import { useState } from "react";
export default function StudentDetails() {
  const [addStdOpen, setAddStdOpen] = useState(false);
  const openAddStdClose = () => {
    setAddStdOpen(!addStdOpen);
  };
  return (
    <>
    {addStdOpen && <AddStudentModal addStdOpen={addStdOpen} openAddStdClose={openAddStdClose} setAddStdOpen={setAddStdOpen}/>} 

    <div className="studentDetails">
      <div className="heading">Manage students attendance and activities</div>
      <div className="flow">
        <div className="search">
          <input placeholder="Search for a student" />
          <img alt="serachlogo" src={serachIcon}></img>
        </div>
        <div className="buttons">
          <button className="add" 
          onClick={() => {
            openAddStdClose();
          }}
          >ADD</button>
          <button className="post">POST</button>
        </div>
      </div>
      <div className="Fliter">
        <div className="header">
          <div className="sn"> S.No </div>
          <div className="stname"> Std Name</div>
        </div>
        <div className="date">
          <input type="date"></input>
        </div>
      </div>
      <div className="details">
        <Student />
        <Student />
        <Student />
      </div>
    </div>
</>

  );
}