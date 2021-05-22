import React from 'react'
import { animated, config, useSpring } from 'react-spring'
import { useSnapshot } from 'valtio'
import { imageIndex } from '../state'

let [style,string] =['','']

const TextHeader:React.FC = () => {
    useSnapshot(imageIndex)
    if (imageIndex.value === 0 ) {
        style = 'top-0 left-0 m-6'
        string= 'WE ARE BREAKING\nOUR VOW\nOF SILENCE'
    }
    if (imageIndex.value === 1) {
        style = 'left-16 top-1/2 transform -translate-y-1/2'
        string = 'TALENT IS GIVEN\nTRUE SKILLED IS\nEARNED'
    }
    if (imageIndex.value === 2) {
        style = 'left-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTION'
    }
    if (imageIndex.value ===3 ) {
        style = 'right-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTION'
    }
    if (imageIndex.value ===4) {
        style = 'right-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTIon'
    }
    if (imageIndex.value === 5) {
        style = 'right-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTION'
    }
    if (imageIndex.value === 6) {
        style = 'left-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTION'
    }
    if (imageIndex.value === 7) {
        style = 'left-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTION'
    }
    if (imageIndex.value === 8) {
        style = 'left-16 top-1/2 transform -translate-y-1/2'
        string = 'BE FLEXIBLE TO\nCHANGE AND\nSTUDY IN\nCONVICTION'
    }
    if (imageIndex.value === 9) {
        style='hidden'
    }

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        delay: 200,
        config: config.molasses,
    })

    return (
        <animated.div className={`absolute text-white text-6xl underline whitespace-pre-line text-font `+ `${style}`} style={props}>
            {string}
        </animated.div>
    )
}

export default TextHeader
