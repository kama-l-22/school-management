import React from "react";
import Notice from "./notice";
import good from "../asset/icons8-notice1-64.png";
import warn from "../asset/icons8-notice2-50.png";
import bad from "../asset/icons8-notice3-50.png";
import AddNoticeModal from "../modals/addNoticeModal";
import { useState } from "react";

export default function NoticeBoard() {
  const [openmodal, setOpenModal] = useState(false);
  const opnAndClose = () => {
    console.log("hello");
    setOpenModal(!openmodal);
  };
  return (
    <>
      {openmodal&& <AddNoticeModal />}
      <div className="noticeBoard">
        <div className="top">
          <div className="heading"> Notice Board </div>
          <div
            className="addnoticebutton"
            onClick={() => {
              opnAndClose();
            }}
          >
            +
          </div>
        </div>
        <div className="notices">
          <Notice message={"adding a bad messsage"} logo={bad} type={"bad"} />
          <Notice message={"Hello hai the message"} logo={good} type={"good"} />
          <Notice message={"Hello hai the message"} logo={warn} type={"warn"} />
          <Notice message={"Hello hai the message"} logo={warn} type={"warn"} />
          <Notice message={"Hello hai the message"} logo={bad} type={"bad"} />
          <Notice message={"Hello hai the message"} logo={good} type={"good"} />
          <Notice message={"Hello hai the message"} logo={warn} type={"warn"} />
          <Notice message={"Hello hai the message"} logo={bad} type={"bad"} />
        </div>
      </div>
    </>
  );
}
