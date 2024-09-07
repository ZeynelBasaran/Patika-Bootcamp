import React from "react";
import purch1 from "/public/purchase1.jpg"
import purch2 from "/public/purchase2.jpg"
import purch3 from "/public/purchase3.jpg"
import purch4 from "/public/purchase4.jpg"

function SectionEl2() {
  return (
    <div className="white">
      <div className="purchase container">
        <h2>PURCHASE FROM US</h2>
        <hr />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eaque
          dicta sapiente <br />
          minus dignissimos repellendus.
        </p>
        <div className="card-section">
          <div className="card">
            <img src={purch1} alt="" />
            <p className="head">Kettlebell /5 KG</p>
            <p className="price">
              <span className="line">86,99</span> / 59,99 $
            </p>
            <p className="add">
              <i className="fa-solid fa-cart-plus"></i> Add To Cart
            </p>
          </div>
          <div className="card">
            <img src={purch2} alt="" />
            <p className="head">Treadmill</p>
            <p className="price">
              <span>899,99</span> / 599,99 $
            </p>
            <p className="add">
              <i className="fa-solid fa-cart-plus"></i> Add To Cart
            </p>
          </div>
          <div className="card">
            <img src={purch3} alt="" />
            <p className="head">Adjusttable Dumbell</p>
            <p className="price">
              <span>89,99</span> / 59,99 $
            </p>
            <p className="add">
              <i className="fa-solid fa-cart-plus"></i> Add To Cart
            </p>
          </div>
          <div className="card">
            <img src={purch3} alt="" />
            <p className="head">Kettlebell / 3kg</p>
            <p className="price">
              <span>86,99</span> / 59,99 $
            </p>
            <p className="add">
              <i className="fa-solid fa-cart-plus"></i> Add To Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEl2;
