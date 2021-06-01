import React from 'react'
import { animated, config, useSpring } from 'react-spring'
import { useSnapshot } from 'valtio'
import { imageIndex } from '../state'


const boxes = [...Array.from({length:10}).keys()]

const PageSwith = ()=> {
    useSnapshot(imageIndex)
    const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 200,
		config: config.molasses,
	  })
    return (
        <div className="absolute bottom-6 left-6 h-4 text-white flex items-center select-none">
            <div className="flex  border border-dashed h-4 w-60 -m-px">
                {boxes.map((p,i)=>(
                <div className="w-6 h-full relative text-xs  border-r border-dashed flex justify-center items-center p-0.5" key={i} onClick={()=>{ imageIndex.value = p }}>
                    { p === 0 || p===9 ?"":p}
                    {imageIndex.value === p ?  <div className="bg-white w-full h-full absolute" style={{width:"80%", height:"75%"}} />:""}
                </div>))}
            </div>
            <animated.div className="ml-8 text-k2" style={props}>
                {imageIndex.value === 0 || imageIndex.value === 9 ? "" : `Step  ${imageIndex.value} of 8 ...`}
            </animated.div>
        </div>
    )
}

export default PageSwith
