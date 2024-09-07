import { useEffect, useState, useContext } from "react";
import "../QuesandAnswer/answer.css";
import { ActivePageContext } from "../../Context/ActivePage";

function Answer() {
  const {
    questions,
    setClass,
    currentquiz,
    classN,
    setScore,
    score,
    setCurrentQuiz,
    verilenCevap,
    setVerilenCevap,
    time,
    setTime,
  } = useContext(ActivePageContext);

  function changeQuiz(e) {
    e.preventDefault();

    //Seçilen cevapla Array listteki cevap uyuşuyorsa score degişken +1 Artmaktadır.
    if (e.target.value === questions[currentquiz].answer) {
      setScore(score + 1); 
    }

    setVerilenCevap([...verilenCevap, e.target.value]);

    increaseTimer();
    setTime(0);
    setClass(false)
  }

  function increaseTimer() {
    setCurrentQuiz((prevCurrentquiz) => prevCurrentquiz + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Temizleme fonksiyonu, bileşen unmount olduğunda veya yeniden render olduğunda çalışır
    return () => clearTimeout(timer);
  }, [time]);

  console.log(time)

  useEffect(() => {
    const timer = setTimeout(() => {
      setClass(true); // 4 saniye sonra setClass true yapılır
    }, 4000); // 4 saniyelik gecikme

    // Temizlik fonksiyonu, bileşen unmount olduğunda zamanlayıcıyı iptal eder
    return () => clearTimeout(timer);
  }, [classN]);

  return (
    <ul className={classN ? "list animation" : "list"}>
      <li>
        <input
          type="radio"
          name="answer"
          id="a"
          value={questions[currentquiz].options[0]}
          className="answer"
          onClick={changeQuiz}
        />
        <label htmlFor="a" id="a_text">
          {questions[currentquiz].options[0]}
        </label>
      </li>

      <li>
        <input
          type="radio"
          name="answer"
          id="b"
          value={questions[currentquiz].options[1]}
          className="answer"
          onClick={changeQuiz}
        />
        <label htmlFor="b" id="b_text">
          {questions[currentquiz].options[1]}
        </label>
      </li>

      <li>
        <input
          type="radio"
          name="answer"
          id="c"
          value={questions[currentquiz].options[2]}
          className="answer"
          onClick={changeQuiz}
        />
        <label htmlFor="c" id="c_text">
          {questions[currentquiz].options[2]}
        </label>
      </li>

      <li>
        <input
          type="radio"
          name="answer"
          id="d"
          value={questions[currentquiz].options[3]}
          className="answer"
          onClick={changeQuiz}
        />
        <label htmlFor="d" id="d_text">
          {questions[currentquiz].options[3]}
        </label>
      </li>
    </ul>
  );
}

export default Answer;
