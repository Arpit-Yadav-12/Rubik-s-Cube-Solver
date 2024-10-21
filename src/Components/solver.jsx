import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CubeFaces from './cubesfaces';

function Solver() {

    const bannerRefSolver = useRef(null);


    useEffect(() => {
        const bannerWidth = bannerRefSolver.current.offsetWidth;
        gsap.fromTo(
          bannerRefSolver.current,
          { x: `0px` },   // Start position (off-screen)
          {
            x: '100vw',                 // End position (off-screen on the right)
            duration: 15,               // Duration of animation (adjust as needed)
            repeat: -1,                 // Infinite loop
            ease: 'linear',             // Linear movement for continuous speed
          }
        );
      }, []);

  return (
    <>
        <div className='relative w-full h-[100vh] overflow-hidden bg-text'>
            <div ref={bannerRefSolver} className='text-yellow-50 flex justify-center text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] font-[Oswald] whitespace-nowrap'>SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER SOLVER</div>
            <CubeFaces />
        </div>
    </>
  )
}

export default Solver