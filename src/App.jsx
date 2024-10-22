import "./App.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Instructions from "./Components/instructions";
import LocomotiveScroll from "locomotive-scroll";
import Solver from "./Components/solver";

// import solver from "rubiks-cube-solver"
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // let cubeState = [
  //   'flulfbddr', // front
  //   'rudrruddl', // right
  //   'dbbburrfb', // up
  //   'llffdrubf', // down
  //   'rludlubrf', // left
  //   'lubfbfudl' // back
  // ].join('');

  // let solveMoves = solver(cubeState);
  // console.log(solveMoves);

  return (
    <>
      {/* BackGround Start*/}
      {/* <div className="h-[3235px] overflow-hidden w-100vh absolute bg-cover">
        <img src="/src/assets/background-gradient.svg" className="absolute min-w-full" /> 
      </div> */}
      <div className="bg-[url('/src/assets/background-gradient.svg')] overflow-hidden min-w-full bg-cover h-screen">
        <Header />
        <Hero />
      </div>
      <Instructions />
      <Solver />
    </>
  );
}

export default App;
