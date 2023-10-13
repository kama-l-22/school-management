import React from "react";

export default function AddNoticeModal( {openmodal,opnAndClose}) {
  return (
    <div className="addnoticemodal">
      <div className="noticeModal">
        <div className="cancleButton" onClick={() => {opnAndClose(openmodal)}}>
          x
        </div>
        <div className="heading">Add a New Notice to display</div>
        <div className="form">
          <select className="type">
            Select the Notice type
            <option>Warning</option>
            <option>Good</option>
            <option>Bad Remark</option>
          </select>

          <input type="text" className="noticeMessage" required max={50}/>
        </div>
        <div className="buttons">
        <button className="Add">Add</button>
        <button className="cnl" onClick={()=>{opnAndClose()}}>Cancle</button>

        </div>
      </div>
    </div>
  );
}
