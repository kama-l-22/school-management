import React from "react";
import { useState } from "react";
import StudentModal from "../modals/studentModal";
import RemarkModal from "../modals/remarkModal";
export default function Student({data,setdata}) {
  console.log(data);
  const [openDeatails, setopenDeatails] = useState(false);
  const [present, setpresent] = useState(data.present);
  const [openRemark, setOpenRemark] = useState(false);
  return (
    <>
      {openDeatails && (
        <StudentModal
          openDeatails={openDeatails}
          setopenDeatails={setopenDeatails}
          data={data}
          setdata={setdata}
        />
      )}
      {openRemark && (
        <RemarkModal openRemark={openRemark} setOpenRemark={setOpenRemark} />
      )}
      <div className="student">
        <div className="dets">
          <div className="rollno">{data.rollno}</div>
          <div
            className="name"
            onClick={() => {
              setopenDeatails(!openDeatails);
            }}
          >
            {data.fname}
          </div>
        </div>
        <div className="actions">
          <button
            className="remark"
            onClick={() => {
              setOpenRemark(!openRemark);
            }}
          >
            Remark
          </button>
          <div className="work">
            <button
              style={{ opacity: `${present ? 1 : ""}` }}
              className="present"
              onClick={() => {
              }}
            >
              Present
            </button>
            <button
              style={{ opacity: `${!present ? 1 : ""}` }}
              className="absent"
              onClick={() => setpresent(false)}
            >
              Absent
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
