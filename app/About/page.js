"use client"
import React, { useState } from 'react'
import axios from 'axios'

const About = () => {
  const [images, setImages] = useState([]);
  const getImages = async ()=>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      console.log(response);
      const data = response.data;
      setImages(data);
    }
    catch(error){
      console.error('Image not found');
    }
  }
  return (
    <>
    <div className='flex flex-col items-center'>
      <button onClick={getImages} className='text-white bg-black w-12 h-8 rounded-md'>Get</button>
      <h1 className='text-xl w-80 text-center bg-black text-white mt-3 rounded-md '>Images</h1>
      {images.map((elem,i)=>{
        return <img key={i} src={elem.download_url} alt="Image" width={300} height={300}
        className='m-3 rounded-md shadow-md shadow-black'/>
      })}
    </div>
    </>
  )
}

export default About