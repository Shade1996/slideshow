import React, { useCallback } from 'react'
import { ReactComponent as Left} from '../assets/left.svg'
import { ReactComponent as Right} from '../assets/right.svg'
import backSrc from '../assets/background.jpg'
import TextHeader from './TextHeader'
import {ReactComponent as Logo} from '../assets/logo.svg'
import PageSwith from './PageSwith'
import { useSnapshot } from 'valtio'
import { imageIndex } from '../state'

const ImageSlider:React.FC = ()=> {
    useSnapshot(imageIndex)
    const nextImage = useCallback(
        () => {
            if (imageIndex.value +1 > 9 ) 
            return;
            imageIndex.value += 1
            console.log(imageIndex.value)
        },
        [],
    )
    const previousImage = useCallback(
        () => {
            if (imageIndex.value - 1  < 0) 
            return;
            imageIndex.value -= 1
        },
        [],
    )

    return (
        <div className="relative h-screen overflow-hidden ">
            <Left className="h-16  absolute left-0 top-1/2  z-20 transform -translate-y-1/2 text-white stroke-current" onClick={previousImage} />
            <Right className="h-16 absolute right-0 top-1/2  z-20 transform -translate-y-1/2 text-white stroke-current" onClick={nextImage}  />
            <TextHeader />
            <Logo className="absolute right-0 bottom-0 m-6 z-20 " />
            <PageSwith />
            {imageIndex.value === 0 ?<div className="absolute bottom-14 ml-8 text-white w-60 break-words " style={{fontFamily:"k2"}}>Lorem ipsum dolor sit amet44ffgsg consectetur adipisicing elit. Aperiam animi quisquam fugi.</div>:""}
            <div className="flex w-max" >
                <div className="h-screen bg-no-repeat transition-all duration-700 ease-in-out " style={{ 
                    backgroundImage: `url(${backSrc})`,
                    width: imageIndex.value ===9 ? "35vw" :"100vw",
                    backgroundPositionX:-imageIndex.value*1280
                    }}/>
                    {/* <div className="flex-grow w-96"></div> */}
                {/* {imageIndex.value === 9 ?
                <div className="h-screen transition-all transform duration-700 ease-in-out flex justify-end right-0 bg-black text-white text-font p-4">
                    <div className="text-5xl underline">BECOME A MONK</div>
                </div> :""} */}
                <div className="h-screen w-screen transition-all transform duration-700 ease-in-out flex justify-center bg-black text-white text-font p-4">
                    <div className="text-5xl underline">BECOME A MONK</div>
                </div>
            </div>
            
            {/* {imageIndex.value === 9 ? <div className="absolute h-screen max-w-screen-xl transition-all transform duration-700 ease-in-out flex justify-end right-0 bg-black text-white flex-grow w-full text-font p-4">
                <div className="text-5xl underline">BECOME A MONK</div>
            </div>:""} */}
        </div>
    )
}

export default ImageSlider
