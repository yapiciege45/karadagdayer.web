"use client"
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'

export default function ImageDisplay ({ params }) {

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/storage/images/${params.name}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`,
            }
        })
        .then(res => res.blob())
        .then(blob => {
            const imageURL = URL.createObjectURL(blob); // Blob'u bir URL'ye çevir
            const image = new Image();
            image.src = imageURL;
            

            const containerDiv = document.querySelector('img'); // Burada 'container' id'li bir div kullanılıyor

            if (!containerDiv) {
                document.body.appendChild(image);
            } else {
            console.error("Container div bulunamadı.");
            }
        })
    }, [])
    
        return (
            <div></div>
        )
}
