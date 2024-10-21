import React from 'react'

function Header() {
  return (
        <div className='w-full top-0 h-1/5 px-20 py-10 text-text font-bold flex justify-between'>
            <div className="logo h-8 w-8 bg-slate-600"></div>
            <div className="navLinks font-[Inter] font-medium flex text-[20px] gap-8">
              {["INSTRUCTIONS", "SOLVER"].map((item, index) => (
                <a key={index} className='text-md'>{item}</a>
              ))}
            </div>
        </div> 
  )
}

export default Header