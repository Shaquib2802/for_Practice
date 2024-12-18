import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
const Practice2 = () => {
    const [open, setOpen] = useState();

    const handleOpen = () =>{
        setOpen(!open);
    }

    const handleClose = () =>{
        setOpen(false);
    }

  return (
    <div>
    <h1 onClick={handleOpen}>Open</h1>
    {
        open && 
      <form className='mx-auto relative border border-black w-[50%] h-[50%]'>
      <ImCross onClick={handleClose}  className='absolute right-2 top-2'/>
        <label>Name:</label>
        <input type="text" className='block border border-black' />
        <label >Password:</label>
        <input type="text" className='block border border-black'/>
      </form>
    }
    </div>
  )
}

export default Practice2