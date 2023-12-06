import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

export default function LoginScreen() {
  const LoginData = useFormik({initialValues:{
    index_no:null,
    reg_no:null
  }})
  const SendReq = () =>{
    axios.post("http://localhost:5000/login",LoginData.values)
    console.log(LoginData.values);
  }
  return ( 
    <>
      <p className='text-4xl text-center my-3 text-slate-500 font-mono font-semibold'>Login Now </p>
      <div className='flex flex-row w-full justify-center mb-5'>
        <img src="/images/login.svg" width={200} alt="" className='my-10' />
      </div>
      <div className="flex flex-col w-full  justify-center gap-6">
        <p className='ml-9 font-semibold'>Student Index</p>
        <input onChange={LoginData.handleChange} type="text" name="index_no"  className='rounded-lg w-4/5 mx-auto h-16 border-2' />
        <p className='ml-9 font-semibold'>Registration Number</p>
        <input onChange={LoginData.handleChange} type="text" name="reg_no"  className='rounded-lg w-4/5 mx-auto h-16 border-2' />
        <button className='w-4/5 h-12 bg-yellow-300 border rounded-full mx-auto font-mono text-lg mt-6' onClick={()=>SendReq()}>Login</button>

      </div>
    </>
  )
}
