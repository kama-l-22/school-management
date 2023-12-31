import React, { useEffect } from "react";
import "./App.scss";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ImprotantNotice from "./components/improtantNotice";
import StudentDetails from "./components/studentDetails";
import ShowPeople from "./components/showPeople";
import NoticeBoard from "./components/noticeBoard";
import student from "../src/asset/icons8-students-64.png";
import teacher from "../src/asset/icons8-teacher-64.png";
import Notificationmodal from "./modals/notificationModal";
// eslint-disable-next-line no-unused-vars
import Signin from "./components/sign-in";
import getdata from "./apis/maindata";

const modaldata = [{
  rollno: 123,
  name: 'kamla',
  fathername: 'kjhds',
  dob: '22/3/2322',
  mobileno: 9238744,
  email: "kamla@gamil.com",
  remark: ['984', 498324],
  performance: 50,
  present: true,
  date: '2/3/44'
}]

export default function App() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata().then(data => setdata(modaldata))
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [userName, setuserName] = useState("Kamalesh");
  const [openNotfi, setOpenNotifi] = useState(false);

  const openAndCloseNotfi = () => {
    console.log("called");
    setOpenNotifi(!openNotfi);
  }
  return (
    <>
      {false && <Signin />}
      {true && (
        <div>
          {openNotfi && (
            <Notificationmodal
              openNotfi={openNotfi}
              setOpenNotifi={setOpenNotifi}
              openAndCloseNotfi={openAndCloseNotfi}
            />
          )}
          <Navbar
            userName={userName}
            openNotfi={openNotfi}
            setOpenNotifi={setOpenNotifi}
            openAndCloseNotfi={openAndCloseNotfi}
            data={data}
            setdata={setdata}
          />
          <div className="main">
            <div className="mainOne">
              <ImprotantNotice />
              <StudentDetails
                data={data}
                setdata={setdata}
                openAndCloseNotfi={openAndCloseNotfi}
              />
            </div>
            <div className="mainTwo">
              <ShowPeople role={"Teachers"} count={30} logo={teacher} />
              <ShowPeople
                role={"Students"}
                count={data?.length ?? 0}
                logo={student}
              />
              <NoticeBoard
                userName={userName}
                openNotfi={openNotfi}
                setOpenNotifi={setOpenNotifi}
                openAndCloseNotfi={openAndCloseNotfi}
              />
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
