import React from "react";
import "./stylemain.css";
import Nav from "./Nav";
import DivCont from "./DivCont";

function Main() {
  //Change to Navbar BG Color
  document.addEventListener("scroll", (e) => {
    const navBar = document.querySelector("nav");
    navBar.style.backgroundColor = "#355592";

    if (window.scrollY === 0) {
      navBar.style.backgroundColor = "";
    }
  });
  return (
    <>
      <main>
        <Nav />
        <DivCont />
      </main>
    </>
  );
}

export default Main;
