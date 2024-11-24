import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CubeFaces from "./cubesfaces";

function Solver() {
  const bannerRefSolver = useRef(null);

  useEffect(() => {
    const bannerWidth = bannerRefSolver.current.offsetWidth;
    gsap.fromTo(
      bannerRefSolver.current,
      { x: `0px` }, // Start position (off-screen)
      {
        x: "100vw", // End position (off-screen on the right)
        duration: 15, // Duration of animation (adjust as needed)
        repeat: -1, // Infinite loop
        ease: "linear", // Linear movement for continuous speed
      }
    );
  }, []);

  return (
    <>
      <div className="solver-page relative w-full h-auto overflow-hidden bg-text">
        <div
          ref={bannerRefSolver}
          className="text-yellow-50 flex mb-6 justify-center text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] font-[Oswald] whitespace-nowrap"
        >
          SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER
          SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER
        </div>
        <CubeFaces />
      </div>

      <div className="relative w-full h-screen overflow-hidden bg-red-400">
        <div className="flex flex-col items-center justify-center h-screen">
          {/* Responsive 9x9 grid of squares */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>̥
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>
            <div className="w-40 h-40 bg-blue-500"></div>
          </div>

          {/* Button below the 9 squares */}
          <div className="inline-flex mt-6">
            <button className="bg-red-600 text-yellow-100 px-4 py-2 rounded">
              Solve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solver;
