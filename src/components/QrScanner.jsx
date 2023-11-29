"dynamic import"
import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import Swal from 'sweetalert2';

export default function QrScanner() {
    const [data, setData] = useState('No result');

    const SuccessFunc = () => {
        Swal.fire({
            title: 'Please Wait...',
            text: 'Scanning In Progress...',
            icon: 'info',
            timerProgressBar: true,
            timer: 5000
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
                        SuccessFunc()
                    }
                    // if (error) {
                    //     console.info(error);
                    // }
                }}
            />
        </div>
    )
}
