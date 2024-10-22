import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Instructions() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const bannerWidth = bannerRef.current.offsetWidth;
    gsap.fromTo(
      bannerRef.current,
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
      <div className="relative w-full h-[100vh] overflow-x-hidden overflow-y-hidden bg-text">
        <div
          ref={bannerRef}
          className="text-yellow-50 flex justify-center text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] font-[Oswald] whitespace-nowrap"
        >
          INSTRUCTIONS INSTRUCTIONS INSTRUCTIONS INSTRUCTIONS INSTRUCTIONS
          INSTRUCTIONS INSTRUCTIONS INSTRUCTIONS INSTRUCTIONS INSTRUCTIONS
          INSTRUCTIONS
        </div>

        <div className="instruction_content mt-8 text-justify text-yellow-50 font-[Oswald] text-[17px] sm:text-[20px] md:text-[22px] lg:text-[27px] tracking-wide ml-[8px] mr-[8px] sm:ml-[20px] sm:mr-[20px] md:ml-14 md:mr-14 lg:ml-20 lg:mr-20">
          <p className="mb-5">
            Step 1 : Take the scrambled Rubik’s cube in front of you in default
            orientation. The official default orientation is when the front face
            is green, the up face is white, and the right face is red.
          </p>
          <p className="mb-5">
            Step 2 : Fill in the colors for all six faces, starting from the
            top-left box. Follow the rules given below for cube orientation
            (Note : Switch to{" "}
            <span className="text-yellow-500">default orientation</span> after
            filling each face).
          </p>
          <p className="mb-5">
            <span>&#8226;</span> Front (F){" "}
            <span className="text-green-600">Green</span>: Face the cube with
            the green face front and white face up. Fill in the colors exactly
            as you see. <br />
            <span>&#8226;</span> Right (R){" "}
            <span className="text-red-600">Red</span>: Rotate the entire cube
            left once. The red face should now be front, white face up. Fill in
            the colors. <br />
            <span>&#8226;</span> Up (U){" "}
            <span className="text-white">White</span>: Rotate the cube forward
            once. The white face is now front, and blue is up. Fill in the
            colors. <br />
            <span>&#8226;</span> Down (D){" "}
            <span className="text-yellow-400">Yellow</span>: Rotate the cube
            backward once. The yellow face is front, green is up. Fill in the
            colors. <br />
            <span>&#8226;</span> Left (L){" "}
            <span className="text-orange-600">Orange</span>: Rotate the cube
            right once. The orange face is front, white is up. Fill in the
            colors. <br />
            <span>&#8226;</span> Back (B){" "}
            <span className="text-blue-600">Blue</span>: Rotate the cube 180°
            (left or right twice). The blue face is front, white is up. Fill in
            the colors.
          </p>
          <p className="mb-2">
            Step 3 : After filling in the colors for all six faces, click the
            "Solve" button and follow the solution's moves in the given order to
            solve the cube. Start by placing the cube in the default
            orientation. Hover over the notation for instructions on how it is
            performed.
          </p>
        </div>
      </div>
    </>
  );
}

export default Instructions;
