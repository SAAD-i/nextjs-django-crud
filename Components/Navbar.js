"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = (props) => {
  return (
    <>
    <div className=' bg-black flex justify-between items-center p-3 m-3 rounded-md text-white'>
        <h1 className='text-2xl font-extrabold hover:cursor-pointer'>{props.name}</h1>
        <ul className='flex gap-5'>
            <Link href={'/'} className=' hover:cursor-pointer'>Home</Link>
            <Link href={'/Contact'} className=' hover:cursor-pointer'>Contact</Link>
            <Link href={'/About'} className=' hover:cursor-pointer'>About</Link>
        </ul>
        <h2 className='text-xl font-bold hover:cursor-pointer'>Login</h2>
    </div>
    </>
  )
}

export default Navbar