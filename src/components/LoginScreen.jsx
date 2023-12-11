import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import * as jose from 'jose'

export default function LoginScreen() {



  const navigate = useNavigate();

  useEffect(() => {
    try {
      jose.decodeJwt(sessionStorage.getItem("auth"))
      navigate("/home")
    }
    catch (e) {
      console.log("");
    }
  }, [])

  const LoginData = useFormik({
    initialValues: {
      index_no: null,
      reg_no: null
    }
  })
  const SendReq = () => {
    if (LoginData.values.index_no && LoginData.values.reg_no) {
      Swal.fire({
        title: "Please Wait...",
        text: "Logging You In...",
        imageUrl: "/images/infinity_loading.svg",
        showCancelButton: false,
        showConfirmButton: false,
        allowEnterKey: false,
        allowOutsideClick: false,
        allowEscapeKey: false
      })
      axios.post("http://localhost:5000/login", LoginData.values).then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          Swal.close()
          navigate("/home")
          sessionStorage.setItem("auth", res.data.secret)
        }
      }).catch((err)=>{
        if(err){
          Swal.fire({
            title:"Login Failed!",
            text:"Please Check The Login Details...",
            imageUrl:"/images/forbidden.svg"
          })
        }
      })
    }
    else {
      Swal.fire({
        title: "Login Failed!",
        text: "Please Enter Login Credientials",
        icon: "error"
      })
    }

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
        <input onChange={LoginData.handleChange} type="text" name="index_no" className='rounded-lg w-4/5 mx-auto h-16 border-2' />
        <p className='ml-9 font-semibold'>Registration Number</p>
        <input onChange={LoginData.handleChange} type="text" name="reg_no" className='rounded-lg w-4/5 mx-auto h-16 border-2' />
        <button className='w-4/5 h-12 bg-yellow-300 border rounded-full mx-auto font-mono text-lg mt-6' onClick={() => SendReq()}>Login</button>
      </div>
    </>
  )
}
