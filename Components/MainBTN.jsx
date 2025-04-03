import React from 'react'

function MainBTN(props) {
  return (
    <>
      <button
      className="relative px-8 py-3 text-white font-semibold rounded-full overflow-hidden 
                 bg-[length:200%_100%] bg-gradient-to-l from-[#8750f7] via-[#2a1454] to-[#8750f7] 
                 hover:bg-[position:-100%_0%] transition-all duration-400 ease-in-out"
    >
      {props.text}
    </button>
    </>
  )
}

export default MainBTN
