import React, { useState } from 'react'
import { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate,useLocation } from 'react-router-dom';
import * as jose from 'jose'
import Swal from 'sweetalert2';
import axios from 'axios';


export default function VerificationScreen() {

    const navigate = useNavigate()


    const location = useLocation()

    const lecture = location.state

    const Home = () =>{
        navigate("/home")
    }

    function onSubmit(token) {
        Swal.fire({
            title:"Please Wait...",
            text:"Verification On Progress...",
            allowEnterKey:false,
            allowEscapeKey:false,
            allowOutsideClick:false,
            imageUrl:"/images/infinity_loading.svg",
            showCancelButton:false,
            showConfirmButton:false,
            didOpen:()=>{
                axios.post("http://localhost:5000/verifyCapcha",{token:token}).then((res)=>{
                    if(res.data.success){
                        Swal.fire({
                            title:"Attendance Marked Succesfully",
                            text:"Thank You For Your Corparation",
                            icon:"success",
                            timer:5000,
                            timerProgressBar:true,
                            allowEnterKey:false,
                            allowOutsideClick:false,
                            allowEscapeKey:false
                        }).then((res)=>{
                            if(res.isConfirmed || res.dismiss=="timer"){
                                navigate("/home")
                            }
                            console.log(res);
                        })
                    }
                })
            }
        })
        console.log(token);
    }
    const [User, setUser] = useState({})



    useEffect(() => {

        try {
            jose.decodeJwt(sessionStorage.getItem("auth"))
            let user = jose.decodeJwt(sessionStorage.getItem("auth"))
            console.log(jose.decodeJwt(sessionStorage.getItem("auth")));
            setUser(user)
        }
        catch (e) {
            console.log(e);
            navigate("/")
        }

    }, [])

    return (
        <>
            <div className='flex flex-col items-center '>

                <div className='text-start w-full p-2'>
                <i class="fa-solid fa-house fa-2x " onClick={()=>Home()}></i>
                </div>

                <p className="text-center my-5 text-xl font-bold font-mono">
                    Attendance Confirmation
                </p>
                
                <div className=" w-5/6 border-2 p-3 rounded-lg my-5 flex flex-col text-sm">




                    <div className='w-full justify-center flex flex-col '>
                        <div className="flex  px-5 justify-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/1154/1154987.png" alt="none" className='rounded-full  h-16 border-2' />
                        </div>
                        <p className='text-center font-mono font-bold underline my-3'>Student Details</p>

                        <table className='font-mono'>
                        <tr>
                            <td>
                                Student ID
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                {User.reg}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Student Name
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                {User.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Student Index
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                {User.index}
                            </td>
                        </tr>
                    </table>
                    </div>

                </div>
                <div className=" w-5/6 border-2 p-3 rounded-lg my-5 flex text-sm flex-col">

                    <div className='w-full justify-center flex flex-col'>
                        <div className="flex  px-5 justify-center gap-3">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/134/505/small/free-vector-classroom.jpg" alt="none" className='rounded-full  h-16 border-2' />

                        </div>
                        <p className='text-center font-mono font-bold underline my-3'>Lecture Details</p>
                    </div>
                    <table className='font-mono'>
                        <tr>
                            <td>
                                Module ID
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                {lecture[0]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Instructor Name
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                {lecture[1]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Module Name
                            </td>
                            <td>
                                :
                            </td>
                            <td>
                                {lecture[2]}
                            </td>
                        </tr>
                    </table>
                </div>

                <p className='text-center text-xl font-bold font-mono my-5'>Verify To Continue</p>

                <div className="flex justify-center w-full">
                    <ReCAPTCHA
                        sitekey="6LfUMSspAAAAAO7RTODstss2OuXvzMyVID31NMt4"
                        onChange={onSubmit}
                        badge='bottomright'
                    />
                </div>

            </div>

        </>

    )
}
