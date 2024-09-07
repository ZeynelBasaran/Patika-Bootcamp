import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Section2El2() {
  const [kg, setKg] = useState("");
  const [cm, setCm] = useState("");
  const [bmi, setBmi] = useState(0);


  useEffect(() => {
    vkiCalisma();
  },[cm,kg]);

  function vkiCalisma() {
    if (kg === "" || cm === "") {
      setBmi("");
    } else {
      let kgNumb = Number(kg);
      let heightNumb = Number(cm) / 100;
      let vki;
      vki = kgNumb / (heightNumb * heightNumb);
      vki = vki.toFixed(2);
      setBmi(vki);
      bodyMassİndex(vki);
    }
  }

  //Body mass index progress
  function bodyMassİndex(vki) {
    const idx = document.querySelector(".fa-caret-up");
    if(vki<50){
      idx.style.left = `${vki * 1.85}%`;
    }
  }

  return (
    <div className="calc container">
      <div className="calc-info">
        <h2>BMI Calculator</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          assumenda dolor asperiores laudantium architecto nostrum veniam,
          adipisci autem rem, molestiae, repellendus voluptate omnis nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero
          iure totam necessitatibus ullam quibusdam tenetur quod, recusandae
          sint qui ex velit vel repellendus.
        </p>
        <div>
          <input
            type="number"
            id="cm"
            placeholder="Your height"
            className="bmiİnp"
            name="cm"
            value={cm}
            onChange={(e) => {
              setCm(e.target.value);
            }}
          />
          <label htmlFor="cm">cm</label>
        </div>
        <div>
          <input
            type="number"
            id="kg"
            placeholder="Your weight"
            className="bmiİnp"
            name="kg"
            value={kg}
            onChange={(e) => {
              setKg(e.target.value);
            }}
          />
          <label htmlFor="kg">kg</label>
        </div>
      </div>
      <div className="images">
        <p>
          Your BMI: <span className="BMI">{bmi}</span>
        </p>
        <div>
          <img src="./public/bmi-index.jpg" alt="" />
          <i className="fa-solid fa-caret-up fa-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Section2El2;
