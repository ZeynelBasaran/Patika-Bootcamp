import React from "react";
import { useState } from "react";
import Chosed from "./Chosed"
import { useEffect } from "react";

function Section2El1() {
  const [active,setActive]= useState("yoga");

  console.log(`btns ${active} active`)
  return (
    <div className="bg">
      <div className="info container">
        <div className="header">
          <h2>OUR CLASSES</h2>
          <hr />
          <p className="text">
            Lorem ipsum Quibusdam saepe animi, at quisquam repellat unde
            deleniti tempore <br />
            natus hic officia.
          </p>
        </div>
        <div className="chose ">
          <button
            className={`btns ${active==="yoga" ? "yoga" : null} active`}
            onClick={() => {
              setActive("yoga");
            }}
          >
            Yoga
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <button
            className={`btns ${active==="group" ? "yoga" : null} active`}
            onClick={() => {
              setActive("group");
            }}
          >
            Group
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <button
            className={`btns ${active==="solo" ? "yoga" : null} active`}
            onClick={() => {
              setActive("solo");
            }}
          >
            Solo
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <button
            className={`btns ${active==="stretch" ? "yoga" : null} active`}
            onClick={() => {
              setActive("stretch");
            }}
          >
            Stretching
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>

        <Chosed active={active}/>
      </div>
    </div>
  );
}

export default Section2El1;
