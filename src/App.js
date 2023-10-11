import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ImprotantNotice from "./components/improtantNotice";
import StudentDetails from "./components/studentDetails";
import ShowPeople from "./components/showPeople";
import NoticeBoard from "./components/noticeBoard";
import student from '../src/asset/icons8-students-64.png'
import teacher from '../src/asset/icons8-teacher-64.png'


export default function App() {
  const [userName, setuserName] = useState("Kamalesh");
  return (
    <div>
      <Navbar userName={userName} />
      <div className="main">
        <div className="mainOne">
          <ImprotantNotice/>
          <StudentDetails/>
        </div>
        <div className="mainTwo">
          <ShowPeople role ={'Teachers'} count={231} logo = {teacher}/>
          <ShowPeople role ={'Students'} count={5000} logo = {student}/>
          <NoticeBoard/>
        </div>
      </div>
    </div>
  );
}
