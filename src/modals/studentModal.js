import React from "react";
import { useState } from "react";
export default function StudentModal({openDeatails,setopenDeatails,data}) {
  const [width, setwidth] = useState(30);
  return (
    <div className="studentmodal">
      <div className="databox">
        <div className="cancleButton" onClick={()=>{setopenDeatails(!openDeatails)}}>x</div>
        <div className="heading">Viewing the student detail here..!</div>
        <div className="wrap">
          <div className="det">
            <div className="logo">K</div>
            <div className="info">
              <div className="rno">Roll No : {data.rollno}</div>
              <div className="name">FullName : {data.fname} </div>
              <div className="dob">Dob : {data.dob}</div>
              <div className="fname">Father Name : {data.fathername}</div>
            </div>
          </div>
          <div className="status">
            <div className="remarks">
              <div className="top">Remarks</div>
              <ul className="list">
                <li> Need improvement in studies</li>
                <li>Good score</li>
                <li>Need improvement Done!</li>
              </ul>
            </div>
            <div className="perfomance">
              <div className="top">Scholor Perfomance</div>
              <div className="buttons">
                <button
                  className="plus"
                  onClick={() => {
                    (width < 100) && setwidth(width + 10);
                  }}
                >
                  +
                </button>
                <button
                  className="mins"
                  onClick={() => {
                    (width > 30) && setwidth(width - 10);
                  }}
                >
                  -
                </button>
              </div>
              <div className="score">
                <div className="point" style={{ width: `${width}%` }}>
                  {width}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
