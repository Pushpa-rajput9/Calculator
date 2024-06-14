import React from "react";
//import { Link } from "react-router-dom";
//import { useContext } from "react";
import PropTypes from "prop-types";
//import ScientificCalculator from "./ScientificCalculator";

NormalCalculator.propTypes = {
  ButtonClicked: PropTypes.func,
};

function NormalCalculator(props) {
  const handleClicks = (e) => {
    props.ButtonClicked(e.target.value);
  };

  return (
    <div id=" buttons">
      <ul className="flex  flex-col border-t-2 border-gray-400 justify-center">
        <li className="row1 flex  flex-wrap ">
          <button
            id="xvii"
            onClick={handleClicks}
            value="cos()"
            className=" shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            cos()
          </button>
          <button
            id="i"
            onClick={handleClicks}
            value="c"
            className="shadow-inner  shadow-stone-950 w-20 h-12  m-3 flex justify-center items-center bg-lime-500 rounded  font-bold text-xl text-orange-900"
          >
            AC
          </button>
          <button
            id="ii"
            onClick={handleClicks}
            value="+/-"
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12  m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            Del
          </button>
          <button
            id="iii"
            onClick={handleClicks}
            value="%"
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12  m-3 flex justify-center items-center font-bold text-3xl text-orange-900"
          >
            %
          </button>
          <button
            id="iv"
            onClick={handleClicks}
            value="/"
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12  m-3 flex justify-center items-center font-bold text-2xl text-orange-900"
          >
            /
          </button>
        </li>

        <li className="row2 flex  flex-wrap  ">
          <button
            id="xvii"
            onClick={handleClicks}
            value="exp()"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            exp()
          </button>
          <button
            id="v"
            onClick={handleClicks}
            value="7"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            7
          </button>
          <button
            id="vi"
            onClick={handleClicks}
            value="8"
            className=" shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            8
          </button>
          <button
            id="vii"
            onClick={handleClicks}
            value="9"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            9
          </button>
          <button
            id="viii"
            onClick={handleClicks}
            value="*"
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-3xl text-orange-900"
          >
            x
          </button>
        </li>
        <li className="row3 flex  flex-wrap ">
          <button
            id="xvii"
            onClick={handleClicks}
            value="log()"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            log()
          </button>
          <button
            id="ix"
            onClick={handleClicks}
            value="4"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            4
          </button>
          <button
            id="x"
            onClick={handleClicks}
            value="5"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            5
          </button>
          <button
            id="xi"
            onClick={handleClicks}
            value="6"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            6
          </button>
          <button
            id="xii"
            onClick={handleClicks}
            value="-"
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-4xl text-orange-900"
          >
            -
          </button>
        </li>
        <li className="row4 flex  flex-wrap ">
          <button
            id="xvii"
            onClick={handleClicks}
            value="tan()"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            tan()
          </button>
          <button
            id="xiii"
            onClick={handleClicks}
            value="1"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl "
          >
            1
          </button>
          <button
            id="xiv"
            onClick={handleClicks}
            value="2"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            2
          </button>
          <button
            id="xv"
            onClick={handleClicks}
            value="3"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-2xl"
          >
            3
          </button>
          <button
            id="xvi"
            onClick={handleClicks}
            value="+"
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12 m-3 flex justify-center items-center  font-bold text-4xl text-orange-900"
          >
            +
          </button>
        </li>
        <li className="row5 flex  flex-wrap ">
          <button
            id="xvii"
            onClick={handleClicks}
            value="Sin()"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            Sin()
          </button>
          <button
            id="xvii"
            onClick={handleClicks}
            value="√x"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-xl text-orange-900"
          >
            √x
          </button>
          <button
            id="xviii"
            onClick={handleClicks}
            value="0"
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-2xl"
          >
            0
          </button>
          <button
            id="xix"
            onClick={handleClicks}
            value="."
            className="shadow-inner  shadow-stone-950 bg-lime-300 rounded w-20 h-12 m-3 flex justify-center items-center font-bold text-2xl"
          >
            .
          </button>
          <button
            id="xx"
            onClick={handleClicks}
            value="="
            className="shadow-inner  shadow-stone-950 bg-lime-500 rounded w-20 h-12 m-3 flex justify-center items-center text-orange-900 font-bold text-4xl"
          >
            =
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NormalCalculator;
