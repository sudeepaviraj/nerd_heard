import React from 'react'
import QrScanner from './QrScanner'

export default function ScanScreen() {
  return (
    <>
      <div className="flex flex-col w-full justify-start">
        <div className="flex flex-row w-full px-5 justify-start mt-5 gap-3">
          <img src="https://placehold.co/400" alt="none" className='rounded-full  h-16 border-2' />
          <p className='mt-5'>Hello Sudeepa</p>
        </div>

        <div className="flex flex-row w-full justify-center gap-4 px-4 mt-10">
          <div className="h-36 flex-col flex justify-center items-center border rounded-3xl w-1/2 shadow-lg">
            <p className='text-xl font-semibold font-sans'>
              Now
            </p>
            <p className='text-center'>
              ITC1032 Software Engineering
              </p>
          </div>
          <div className="h-36 flex justify-center flex-col items-center border rounded-3xl w-1/2 shadow-lg">
            <p className='text-xl font-semibold font-sans'>
              Next
            </p>
            <p className='text-center'>
              ITC1032 Software Engineering
              </p>
          </div>
        </div>

        <div className="flex w-5/6 self-center justify-center mt-10 border-2 shadow-2xl rounded-3xl">
          <QrScanner />
        </div>

        <button className='w-4/5 h-12 bg-red-600 border rounded-full mx-auto mt-10 font-bold text-white text-2xl'>Scan Failed !</button>
      </div>
    </>
  )
}
