import React, { useState } from 'react'
import { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import * as jose from 'jose'


export default function VerificationScreen() {
    function onSubmit(token) {
        console.log(token);
    }
    const [User, setUser] = useState({})


    const navigate = useNavigate()

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

                <p className="text-center my-5 text-xl font-bold font-mono">
                    Attendance Confirmation
                </p>

                <div className=" w-5/6 border-2 p-3 rounded-lg my-5 flex flex-col">

                    <div className='w-full justify-center flex flex-col'>
                        <div className="flex  px-5 justify-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/1154/1154987.png" alt="none" className='rounded-full  h-16 border-2' />

                        </div>
                        <p className='text-center font-mono font-bold underline my-3'>Student Details</p>
                    </div>

                    <div className="flex w-full justify-around font-semibold">
                        <div className=''>
                            <p>Student Name :</p>
                        </div>
                        <div>
                            <p>{User.name}</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-around font-semibold">
                        <div className='w-1/3'>
                            <p>Index No :</p>
                        </div>
                        <div>
                            <p>{User.index}</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-around font-semibold">
                        <div>
                            <p>Registration Number :</p>
                        </div>
                        <div>
                            <p>{User.reg}</p>
                        </div>
                    </div>
                </div>
                <div className=" w-5/6 border-2 p-3 rounded-lg my-5 flex flex-col">

                    <div className='w-full justify-center flex flex-col'>
                        <div className="flex  px-5 justify-center gap-3">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/134/505/small/free-vector-classroom.jpg" alt="none" className='rounded-full  h-16 border-2' />

                        </div>
                        <p className='text-center font-mono font-bold underline my-3'>Lecture Details</p>
                    </div>

                    <div className="flex w-full justify-around font-semibold">
                        <div className=''>
                            <p>Student Name :</p>
                        </div>
                        <div>
                            <p>{User.name}</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-around font-semibold">
                        <div className='w-1/3'>
                            <p>Index No :</p>
                        </div>
                        <div>
                            <p>{User.index}</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-around font-semibold">
                        <div>
                            <p>Registration Number :</p>
                        </div>
                        <div>
                            <p>{User.reg}</p>
                        </div>
                    </div>
                </div>

                <p className='text-center text-xl font-bold font-mono my-5'>Verify To Continue</p>

                <div className="flex justify-center w-full">
                    <ReCAPTCHA
                        sitekey="6LcsPikpAAAAAEpUKPh6Tu7Si_-LqqpKzxkMQub1"
                        onChange={onSubmit}
                        badge='bottomright'
                    />
                </div>

            </div>

        </>

    )
}
