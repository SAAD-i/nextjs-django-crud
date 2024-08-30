"use client"
import React, { useState } from 'react'
const page = ()=>{
  const [marks, setMarks] = useState(100);
  const [newMarks, setNewMarks] = useState(' ');
  // let check = false;
  // let marks = 114;
  const marksHandler = (value) =>{
    setNewMarks(value);
  }
  const clickHandler = () =>{
    // check=true;
    setMarks(newMarks);
  }
  return (
    <div className='flex justify-center'>
    <div className='p-10 border-b-orange-200 gap-10'>
      <h1 className='text-4xl font-serif font-bold'>My marks are {marks}</h1>
      <input onChange={(val)=>{
        marksHandler(val.target.value);
        // if(check==true){
        //   val.target.value='';
        //   check=false;
        // }
      }} placeholder='Enter Marks' type="text" className=' border-black border rounded-md p-1'/>
      <button onClick={clickHandler} className='text-white bg-slate-700 h-9 w-28 rounded-lg'>Change</button>
    </div>
    </div>
  )
}

export default page