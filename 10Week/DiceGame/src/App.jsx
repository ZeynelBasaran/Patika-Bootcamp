import { useState } from "react";
import "./App.css";
import dice1 from "/public/dice1.png"
import dice2 from "/public/dice2.png"
import dice3 from "/public/dice3.png"
import dice4 from "/public/dice4.png"
import dice5 from "/public/dice5.png"
import dice6 from "/public/dice6.png"



function App() {
  const [playerClass, setPLayerClass] = useState(false);
  const [playerClass2, setPLayerClass2] = useState(false);
  const [player1, setPlayer1] = useState("Player1");
  const [player2, setPlayer2] = useState("Player2");
  const [player1Dice, setplayer1Dice] = useState(1);
  const [player2Dice, setplayer2Dice] = useState(1);
  const [result, setResult] = useState("");
  const [gameOn, setGameOn] = useState(false);


  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  function zarAt() {
    setGameOn(true);
    let rollDice = setInterval(() => {
      setplayer1Dice(Math.floor(Math.random() * 6) + 1);
      setplayer2Dice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollDice);
      //Sonuç geriden geldigi için JS çalışıtırıp rakamları sonradan attık. JS senkron çalışmıyor burada çalışmadıgında degişkene at
      const p1 = Math.floor(Math.random() * 6) + 1;
      const p2 = Math.floor(Math.random() * 6) + 1;

      setplayer1Dice(p1);
      setplayer2Dice(p2);

      if (p1 > p2) {
        setResult(`Kazanan ${player1}`);
      } else if (p1 < p2) {
        setResult(`Kazanan: ${player2}`);
      } else {
        setResult("Berabere");
      }
      setGameOn(false);
    }, 3000);
  }

  return (
    <>
      <div className="app">
        <h1>Haydi Zar Atalım</h1>
        <div className="players">
          <div className="player1">
            <input
              onFocus={() => {
                setPLayerClass(true);
              }}
              onBlur={() => {
                setPLayerClass(false);
              }}
              disabled={gameOn}
              type="text"
              value={player1}
              onChange={(e) => {
                setPlayer1(e.target.value);
              }}
              className={playerClass ? "active" : ""}
            />
            <h2>{player1}</h2>
            <div className="dice">
            <img src={diceImages[player1Dice-1]} alt="" />
            </div>
          </div>
          <div className="player2">
            <input
              onFocus={() => {
                //OnFocus Tıklandıgında true döner
                setPLayerClass2(true);
              }}
              onBlur={() => {
                //OnBlur Focustan çıkıldıgında false döner
                setPLayerClass2(false);
              }}
              disabled={gameOn}
              type="text"
              value={player2}
              onChange={(e) => {
                //Event'ı alarak name i günceller
                setPlayer2(e.target.value);
              }}
              className={playerClass2 ? "active" : ""}
            />
            <h2>{player2}</h2>
            <div className="dice">
              <img src={diceImages[player2Dice-1]} alt="" />
              </div>
          </div>
        </div>
        <button onClick={zarAt} disabled={gameOn}>
          {gameOn ? "Zar atıldı" : "Zar at"}
        </button>
        <h4>{result}</h4>
      </div>
    </>
  );
}

export default App;
