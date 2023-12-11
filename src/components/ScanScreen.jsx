import React, { useEffect, useState } from 'react'
import QrScanner from './QrScanner'
import * as jose from 'jose'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



export default function ScanScreen() {

  const navigate = useNavigate()

  const [User, setUser] = useState({})

  useEffect(() => {
    try{
      jose.decodeJwt(sessionStorage.getItem("auth"))
      let user = jose.decodeJwt(sessionStorage.getItem("auth"))
      console.log(jose.decodeJwt(sessionStorage.getItem("auth")));
      setUser(user)
    }
    catch{
      navigate("/")
    }
  }, [])

  const LogOut = () =>{
    Swal.fire({
      title:"Are You Sure ?",
      text:" You Are Gonna Log OUt",
      icon:"warning",
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:"Confirm"
    }).then((res)=>{
      console.log(res);
      if(res.isConfirmed){
        sessionStorage.removeItem("auth")
        navigate("/")
      }
    })
  }

  return (
    <>
      <div className="flex flex-col w-full justify-start">
        <div className="flex justify-between items-center mt-5">
          <div className="flex flex-row w-full items-center px-5 justify-start gap-3">
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1154/1154987.png" alt="none" className='rounded-full  h-16 border-2' />
            {/* <div className='bg-green-500 w-3 h-3 rounded-full fixed top-16 left-16'></div> */}
            </div>
            <p className=' font-semibold'>{User.name}<br />{User.index}</p>
          </div>
          
        <i onClick={()=>LogOut()} class="fa-solid fa-power-off pe-5 fa-2x"/>
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
        <button className='w-4/5 h-12 bg-lime-400 border rounded-full mx-auto mt-10 font-bold text-white text-2xl'>Contact Us</button>
      </div>
    </>
  )
}
