"dynamic import"
import axios from 'axios';
import React, { useState,useRef } from 'react'
import { QrReader } from 'react-qr-reader'
import Swal from 'sweetalert2';

export default function QrScanner() {
    const [data, setData] = useState('No result');
    const Qr = useRef()

    const SuccessFunc = (qr) => {

        Swal.fire({
            title: 'Please Wait...',
            text: 'Scanning In Progress...',
            icon: 'info',
            timerProgressBar: true,
            timer: 5000
        })
        Qr.current.stop()
        axios.post("http://localhost:5000/lecture",{data:qr})

    }

    return (
        <div className='w-full'>
            <QrReader
            ref={Qr}
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
