import "./Calculator.css";
import { useState } from "react";
export default function Calcualtor() {
  let [result, setResult] = useState("");
  let [hasdot, setHasdot] = useState(false);

  const clickHandler = (e) => {
    let check = e.target.innerText;
    if (check === ".") {
      if (hasdot) return;
      else {
        setHasdot(true);
      }
    }
    if (check === "+" || check === "-" || check === "*" || check === "/") {
      setHasdot(false);
    }
    setResult(result + check);
  };

  const clearBtn = () => {
    setResult("");
    setHasdot(false);
  };
  const equalBtn = () => {
    setResult(String(eval(result)));
    setHasdot(false);
  };
  return (
    <>
      <div className="container">
        <div className="screen">{result}</div>
        <div className="buttons">
          <button onClick={clickHandler}>7</button>
          <button onClick={clickHandler}>8</button>
          <button onClick={clickHandler}>9</button>
          <button onClick={clickHandler} className="operator">
            +
          </button>
          <button onClick={clickHandler}>4</button>
          <button onClick={clickHandler}>5</button>
          <button onClick={clickHandler}>6</button>
          <button onClick={clickHandler} className="operator">
            -
          </button>
          <button onClick={clickHandler}>1</button>
          <button onClick={clickHandler}>2</button>
          <button onClick={clickHandler}>3</button>
          <button onClick={clickHandler} className="operator">
            *
          </button>
          <button onClick={clickHandler}>0</button>
          <button onClick={clickHandler}>.</button>
          <button onClick={equalBtn} className="operator">
            =
          </button>
          <button onClick={clickHandler} className="operator">
            /
          </button>
          <button onClick={clearBtn} className="clear">
            AC
          </button>
        </div>
      </div>
    </>
  );
}
