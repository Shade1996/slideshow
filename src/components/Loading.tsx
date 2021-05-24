import React, { useEffect, useState } from 'react'
import monkSrc from '../assets/monk.png'

function Loading() {
    const [content, setcontent] = useState('Patience!')
    useEffect(() => {
        setTimeout(() => {
            setcontent('Patience, Young padawan')
        }, 2000);
    }, [])
    
    return (
        <div className="w-screen h-screen select-none flex flex-col items-center justify-center text-white bg-black">
            <div className="animate-bounce">
            <img src={monkSrc} alt="monk" className="mb-4"/>
            </div>
            <div style={{ fontFamily:"k4"}}>{content}</div>
        </div>
    )
}

export default Loading
