'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Contact = () => {
  const [students, setStudents] = useState([])
  const [formData, setFormData] = useState({
    name : '',
    age : '',
    regNo : '',
    marks : '',
  })
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const getStudents = async ()=>{
    const response = await axios.get('http://127.0.0.1:5000/api/get');
    const data = response.data;
    setStudents(data);
  }
  useEffect(()=>{
    getStudents()
  })
  const deleteStudent = async (id)=>{
    console.log(`Delete ${id}`)
    const response = await axios.delete(`http://127.0.0.1:5000/api/delete/${id}`)
    console.log(response.data.detail)
    getStudents()
  }
  const addStudent = async ()=>{
    const response = await axios.post(`http://127.0.0.1:5000/api/post`, formData)
    console.log(response.datail)
    const obj = {
      name : '',
      age : '',
      regNo : '',
      marks : '',
    }
    setFormData(obj)
    getStudents()
  }
  const updateStudent = async ()=>{
    try{
      const response = await axios.put(`http://127.0.0.1:5000/api/put/${formData.id}`, formData)
      console.log(response.data)
    }
    catch(error){
      console.error('Request Rejected')
    }
    const obj = {
      name : '',
      age : '',
      regNo : '',
      marks : '',
    }
    setFormData(obj)
    getStudents()
  }
  const changeHandler = (e)=>{
    const { name, value } = e.target
    setFormData((prevData)=>({...prevData, [name] : value}))
  }
  const submitHandler = (e)=>{
    e.preventDefault()
  }
  // getStudents();
  return (
    
    <>
    <div className='flex flex-col items-center font-serif'>
      {/* <button onClick={getStudents} className='text-white bg-black w-12 h-8 rounded-md'>Click</button> */}
      <form onSubmit={submitHandler}
      className='w-72 p-3 flex flex-col items-center gap-2 border '>
        <h1 className={`text-xl font-serif font-semibold border text-white p-2 rounded-md ${isButtonClicked ? 'bg-green-800' : 'bg-black'}`}>Add Student</h1>
        <input className='border-black border rounded-sm p-1' placeholder='Enter Name' type="text" name="name" value={formData.name} onChange={changeHandler}/>
        <input className='border-black border rounded-sm p-1' placeholder='Enter Age' type="text" name="age" value={formData.age} onChange={changeHandler}/>
        <input className='border-black border rounded-sm p-1' placeholder='Enter RegNo' type="text" name="regNo" value={formData.regNo} onChange={changeHandler}/>
        <input className='border-black border rounded-sm p-1' placeholder='Enter Marks' type="text" name="marks" value={formData.marks} onChange={changeHandler}/>
        <button onClick={()=>{
          if(isButtonClicked){
            updateStudent()
            setIsButtonClicked(false)
          }
          else{
            addStudent()
          }
         
        }} className={`text-white w-12 h-8 rounded-md ${isButtonClicked ? 'bg-green-800' : 'bg-black'}`}>Click</button>
      </form>
      <h1 className='text-xl text-white bg-black w-52 text-center rounded-md m-5'>Students</h1>
      <div>
      {students.map((elem,i)=>{
        return <div key={i} className='bg-black text-white m-3 p-5 rounded-md w-72'>
          <h1 className='text-center text-xl text-orange-800 font-bold'>Student {i+1}</h1>
          <h1>Name : {elem.name}</h1>
          <h1>Age : {elem.age}</h1>
          <h1>RegNO : {elem.regNo}</h1>
          <h1>Marks : {elem.marks}</h1>
          <div className='flex justify-center gap-1'> 
            <button onClick={()=>{
              setFormData(elem)
              setIsButtonClicked(true)
            }} className='bg-green-800 text-center rounded-md p-1 mt-2'>Update</button>
            <button onClick={()=>{
              deleteStudent(elem.id);
            }} className='bg-orange-800 text-center rounded-md p-1 mt-2'>Delete</button>
          </div>
        </div>
      })}
      </div>
    </div>
    </>
  )
}

export default Contact