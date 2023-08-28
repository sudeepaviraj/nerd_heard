import React from 'react'

export default function ScanScreen() {
  return (
    <>
    <div className="flex flex-col w-full justify-start">
    <div className="flex flex-row w-full justify-start mt-5 gap-3">
      <img src="https://placehold.co/400" alt="none" className='rounded-full  h-16 border-2' />
      <p className='mt-5'>Hello Sudeepa</p>
    </div>

    <div className="flex flex-row w-full justify-center gap-3 mt-10">
      <div className="h-36 border-4 rounded-3xl w-1/2 shadow-lg"></div>
      <div className="h-36 border-4 rounded-3xl w-1/2 shadow-lg"></div>
    </div>

    <div className="flex w-full justify-center mt-10 h-60 border-4 rounded-3xl"></div>

    <button className='w-4/5 h-12 bg-red-600 border rounded-full mx-auto mt-10'>Scan Failed</button>
    </div>
    </>
  )
}
