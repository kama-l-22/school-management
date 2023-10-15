import React from "react";

export default function RemarkModal({ openRemark, setOpenRemark }) {
  return (
    <div className="remarkModal">
      <div className="remark">
        <div
          className="cancleButton"
          onClick={() => {
            setOpenRemark(!openRemark)
          }}
        >
          x
        </div>
        <div className="heading">Kindly Add Scholor Remark</div>
        <form className="form">
          <input className="remark" type="text" placeholder="Remark"></input>
        </form>
        <div className="buttons">
          <button className="Add">Add</button>
          <button
            className="cnl"
            onClick={() => {
              setOpenRemark(!openRemark)
            }}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}
