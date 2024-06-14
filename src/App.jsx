import { useState, useEffect } from "react";
import NormalCalculator from "./Components/NormalCalculator";
//import NormalCalculator from "./Components/NormalCalculator";

function App() {
  let [Result, setresult] = useState("0");
  useEffect(() => {
    document.title = "Calculator / React";
  });

  function handleClicks(value) {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      case "-":
      case ".":
      case "/":
      case "*":
        if (Result == "0") {
          setresult(value);
        } else {
          setresult(Result + value);
        }
        break;
      case "=":
        setresult(eval(Result));
        break;
      case "c":
        setresult("0");
        break;
      case "+/-":
        setresult(() => {
          parseInt(Result, 10);
          return --Result;
        });
        break;
      case "%":
        setresult(parseFloat(Result, 10) / 100);
        break;
      case "√x":
        setresult(Math.sqrt(parseInt(Result)));
        break;
      case "Sin()":
        setresult(Math.sin(parseFloat(Result)));
        break;
      case "tan()":
        setresult(Math.tan(parseFloat(Result)));
        break;
      case "log()":
        setresult(Math.log(parseFloat(Result)));
        break;
      case "exp()":
        setresult(Math.exp(parseInt(Result)));
        break;
      case "cos()":
        setresult(Math.cos(parseInt(Result)));
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex justify-center w-fit p-20 items-center m-10  shadow-inner rounded-xl shadow-stone-950 bg-gradient-to-t bg-sky-100 ">
      <div className="resultcontainer  bg-amber-400  rounded-xl  bg-transparent w-fit border-2 border-slate-300   shadow-2xl accent-transparent flex flex-col items-center p-10  shadow-stone-800">
        <form className=" w-full bg-white h-20 flex items-end justify-center ">
          <input
            type="text"
            disabled
            value={Result}
            className=" bg-white w-full  m-2 p-1 active:outline-none  flex justify-end  text-right  text-xl"
          ></input>
        </form>
        <NormalCalculator ButtonClicked={handleClicks} />
      </div>
    </div>
  );
}

export default App;
