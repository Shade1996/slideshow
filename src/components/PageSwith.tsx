import React from 'react'
import { useSnapshot } from 'valtio'
import { imageIndex } from '../state'

const boxes = new Array(10)
for (let i = 0; i < boxes.length; i++) {
     boxes[i] = i
    
}
console.log(boxes)
const PageSwith = ()=> {
    useSnapshot(imageIndex)
    return (
        <div className="absolute bottom-6 left-6 h-4 text-white flex items-center">
            <div className="flex  border border-dashed h-4 w-60 -m-px">
                {boxes.map((p,i)=>(
                <div className="w-6 h-full relative text-xs  border-r border-dashed flex justify-center items-center p-0.5" key={i} onClick={()=>{ imageIndex.value = p }}>
                    { p === 0 || p===9 ?"":p}
                    {imageIndex.value === p ?  <div className="bg-white w-full h-full absolute" style={{width:"80%", height:"75%"}} />:""}
                </div>))}
            </div>
            <div className="ml-8" style={{fontFamily:"k2"}}>
                {imageIndex.value === 0 || imageIndex.value === 9 ? "" : `Step  ${imageIndex.value} of 8 ...`}
            </div>
        </div>
    )
}

export default PageSwith
