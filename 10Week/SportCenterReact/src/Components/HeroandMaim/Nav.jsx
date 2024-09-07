import React from "react";

function Nav() {
  function addMenu() {
    const burger = document.querySelector(".burger");
    burger.classList.toggle("actives");
  }
  return (
    <nav>
      <div className="container navbars">
        <div className="logo">
          <a href="#">
            <img src="./public/logo.png" alt="powerfull" />
          </a>
        </div>
        <ul className="navmenu">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#section2">Classes</a>
          </li>
          <li>
            <a href="#section3">Trainer</a>
          </li>
          <li>
            <a href="#rewiew">Rewiew</a>
          </li>
          <li>
            <a href="#contactus">Contact</a>
          </li>
          <button>
            <a href="#">JOİN US</a>
          </button>
        </ul>
        <div className="bar-icon">
          <i className="fa-solid fa-bars" onClick={addMenu}>
            
          </i>
        </div>
        <ul className="burger">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#section2">Classes</a>
          </li>
          <li>
            <a href="#section3">Trainer</a>
          </li>
          <li>
            <a href="#rewiew">Rewiew</a>
          </li>
          <li>
            <a href="#contactus">Contact</a>
          </li>
          <button>
            <a href="#">JOİN US</a>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
