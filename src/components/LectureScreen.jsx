import React from 'react'

export default function LectureScreen() {
  return (
    <>
      <div className="flex flex-col w-full justify-start">
        <div className="flex flex-row w-full px-5 justify-start mt-5 gap-3">
          <img src="https://placehold.co/400" alt="none" className='rounded-full  h-16 border-2' />
          <p className='mt-5'>Hello Sudeepa</p>
        </div>

        <div className="flex flex-row w-full justify-center gap-4 px-4 mt-10">
          <div className="h-36 flex-col flex justify-center items-center border rounded-3xl w-1/2 shadow-lg">
            <p className='text-3xl font-semibold font-sans'>
             60
            </p>
            <p className='text-center'>
              Today Attendance
              </p>
          </div>
        </div>

        <div className="flex w-5/6 self-center h-80 justify-center mt-10 border-2 shadow-2xl rounded-3xl">

        </div>

        <button className='w-4/5 h-12 bg-blue-400 border rounded-full mx-auto mt-10 font-bold text-white text-xl'>Click Here To Genarate QR</button>
      </div>
    </>
  )
}
