import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const circles = 10;
  const interval = 2;
  const [count, setCounter] = useState(0);
  const arr = [];
  for (let i = 1; i <= circles; i++) {
    arr.push(i);
  }

  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min + 1)) + min;
  }
  const setCount = () => {
    setCounter(count + 1);
  };
  function time(x) {
    console.log("time", x);
    setTimeout(() => {
      if (document.getElementById("circle" + x))
        document.getElementById("circle" + x).style.visibility = "hidden";
    }, 2000);
  }

  useEffect(() => {
    setInterval(() => {
      let x = randomNumber(1, circles - 1);
      console.log(x);
      if (document.getElementById("circle" + x)) {
        document.getElementById("circle" + x).style.visibility = "visible";
      }
      time(x);
    }, 2000);
  });
  return (
    <div className="App">
      <div class="gameBox">
        <div class="circlesContainer">
          {arr.map((index, item) => {
            return (
              <div onClick={setCount} class="circle" id={"circle" + item}></div>
            );
          })}
        </div>
        <div class="score">Score is :{count}</div>
      </div>
    </div>
  );
}
