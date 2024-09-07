import React from "react";
import { useState, useEffect, useContext } from "react";
import Answer from "../QuesandAnswer/answer";
import Ques from "../QuesandAnswer/ques";
import İmg from "../İmg/İmg";
import LastScreen from "../LastScreen";

import { ActivePageContext } from "../../Context/ActivePage";

import "./container.css";

function Container() {
  const { questions, currentquiz, setStart, start, score, verilenCevap,setCurrentQuiz,time,
    setTime } =
    useContext(ActivePageContext);

  //Başlagıç Ekranı
  function startQuiz() {
    setStart(false);
  }
  

  //Start butonu
  if (start) {
    return (
      <>
        <button id="start" className="btn1 btn" onClick={startQuiz}>
          Teste Başla
        </button>
      </>
    );
  }

  if (currentquiz > questions.length - 1) {

    //Array listi uzunluğu bitince sonuç ekran gösterimi
    return (
      <>
        <form className="container">
          <h2>
            Yarışma Bitti <br />
            Dogru Cevap Sayınız: {score}
          </h2>
          <div className="last-list" id="list">
            
            <ol>
            <h3>Sizin Cevaplarınız</h3>
              {verilenCevap.map((item) => (
                <LastScreen item={item} />
              ))}
            </ol>
            <ol>
              <h3>Doğru Cevaplar</h3>
              {questions.map((item) => (
                <LastScreen item={item.answer} />
              ))}
            </ol>
          </div>
        </form>
      </>
    );
  } else {
    
    //Currentquiz Degişkeniyle Array üzerinden sorular üzerinden gezin
    return (
      <>
        <form className="container">
          <Ques />
          <Answer />
          <İmg />
        </form>
      </>
    );
  }
}

export default Container;
