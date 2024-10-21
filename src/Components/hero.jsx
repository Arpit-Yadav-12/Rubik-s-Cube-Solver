import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

gsap.registerPlugin(useGSAP);

function Hero() {
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const heading3 = useRef(null);

  useGSAP(
    () => {
      gsap.from(heading1.current, {
      y: 100,
      opacity: 0,
      duration: 3,
      ease: 'expo.out'
      });

      gsap.from(heading2.current, {
      y: 100,
      opacity: 0,
      duration: 2.5,
      ease: 'expo.out',
      delay: 0.4
      });

      gsap.from(heading3.current, {
      y: 100,
      opacity: 0,
      duration: 2.5,
      ease: 'expo.out',
      delay: 0.8
      });
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollY = window.scrollY;
    
      gsap.to(heading1.current, {
        x: scrollY,
        duration: 0.5,
        ease: "power1.out",
        scrub: true
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div className="w-full z-10 h-4/5 leading-none text-text mt-[80px]">
        <div className="masker text-center sm:text-left sm:ml-20 sm:mr-20 ml-5 mr-5 mb-[120px] font-[Oswald] ">
            <h1 ref={heading1} className="font-semibold text-7xl md:text-[120px] lg:text-[170px] xl:text-[224px] tracking-tight position-fixed ">RUBIK'S CUBE</h1>
            <h2 ref={heading2} className="mt-5 mb-4 sm:text-[44px] max-md:text-[40px] lg:text-[62px] font-semibold">/ ˈruːbɪk /</h2>
            <h3 ref={heading3} className="text-base md:text-xl font-[Inter] font-normal leading-none uppercase sm:w-11/12 max-w-4xl">A puzzle consisting of a cube of six colours, each face of which is made up of nine squares, eight of which are individually rotatable. The aim is to swivel the squares until each face of the cube shows one colour only.</h3>
        </div>
        <div className="scroll-btn text-text flex justify-center sm:opacity-20 opacity-0">
          <MdOutlineKeyboardArrowDown className="fixed h-10 w-10 bottom-0"/>
        </div>
    </div>
    
    </>
  )
}

export default Hero