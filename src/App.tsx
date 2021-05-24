import React, { useState } from 'react'
import { animated, config, useSpring } from 'react-spring';
import ImageSlider from './components/ImageSlider'
import Loading from './components/Loading'

function App() {
	const [page, setPage] = useState(0)
	setTimeout(() => {
		setPage(1)
	}, 4000);
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: 200,
		config: config.molasses,
	  })
	return(
		<animated.div className="bg-black" style={props}>
			{page === 0 && <Loading />}
			{page === 1 && <ImageSlider />}
		</animated.div>
	)
}

export default App
