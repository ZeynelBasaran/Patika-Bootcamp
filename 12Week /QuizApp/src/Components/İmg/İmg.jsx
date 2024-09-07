import { useState, useEffect, useContext } from "react";
import "../İmg/img.css"
import { ActivePageContext } from "../../Context/ActivePage";

function İmg({}) {
  const { questions } = useContext(ActivePageContext);
  const { currentquiz } = useContext(ActivePageContext);
  return (
    <div className="images">
      <img src={questions[currentquiz].media} alt="" />
    </div>
  );
}

export default İmg;
