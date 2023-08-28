import React from 'react'

export default function LoginScreen() {
  return (
    <>
      <p className='text-4xl text-center my-3'>Login Now </p>
      <div className='flex flex-row w-full justify-center mb-5'>
        <img src="https://placehold.co/200x200" alt="" />
      </div>
      <div className="flex flex-col w-full justify-center gap-3">
        <p className='ml-9'>Student Index</p>
        <input type="text" name="" id="" className='w-4/5 mx-auto h-16 border-2' />
        <p className='ml-9'>Password</p>
        <input type="password" name="" id="" className='w-4/5 mx-auto h-16 border-2' />
        <button className='w-4/5 h-12 bg-yellow-300 border rounded-full mx-auto'>Login</button>

      </div>
    </>
  )
}
