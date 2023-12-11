"dynamic import"
import axios from 'axios';
import React, { useState,useRef } from 'react'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function QrScanner() {
    const [data, setData] = useState('No result');
    const Qr = useRef()

    const nav = useNavigate()

    const SuccessFunc = (qr) => {
        console.log(qr.text);
        axios.post("http://localhost:5000/lecture",{id:qr.text}).then((res)=>{
            if(res.status==200){
                Swal.close()
                nav("/verify",{state:res.data.data,replace:true})
            }
        }).catch((err)=>{
            if(err.response.status==404){
                Swal.fire({
                    title: 'Scanning Failed...',
                    text: 'Please Confirm that this qr is verified code',
                    imageUrl:"/images/not_found.svg",
                    showConfirmButton:true,
                })
            }
        })
        Swal.fire({
            title: 'Please Wait...',
            text: 'Scanning In Progress...',
            imageUrl:"/images/infinity_loading.svg",
            showConfirmButton:false,
            allowEnterKey:false,
            allowEscapeKey:false,
            allowOutsideClick:false
        })

    }

    return (
        <div className='w-full'>
            <QrReader
            className='w-full'
                constraints={{
                    facingMode: 'environment'
                }}
                onResult={(result, error) => {
                    if (result) {
                        // alert(result)
                        SuccessFunc(result)
                    }
                    // if (error) {
                    //     console.info(error);
                    // }
                }}
            />
        </div>
    )
}
