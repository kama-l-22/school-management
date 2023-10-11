import React from "react";
import menu from "../asset/menu.png";
import { useState } from "react";
export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openAndClose = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="burgericon">
      {" "}
      <img
        alt="menubutton"
        className="brgicon"
        src={menu}
        onClick={() => {
          console.log("hello");
          openAndClose();
        }}
      ></img>
      {menuOpen && <div className="menu">
        <div onClick={()=>{openAndClose()}}> close</div></div>}
    </div>
  );
}
