import React from 'react'

function Navbar(props) {
  return (
    <div className='inline-flex bg-[#1f3352] h-16 w-full '>
        <div className='my-auto text-3xl text-white font-bold text-left w-full sm:w-full pl-7'>
            {props.title} Panel
        </div>
        
    </div>
  )
}

export default Navbar