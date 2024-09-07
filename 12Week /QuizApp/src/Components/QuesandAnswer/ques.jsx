import { useState, useEffect, useContext } from "react";
import { ActivePageContext } from "../../Context/ActivePage";

function Ques() {
  const { questions } = useContext(ActivePageContext);
  const { currentquiz } = useContext(ActivePageContext);
  return <h2 className="question">{questions[currentquiz].question}</h2>;
}

export default Ques;
