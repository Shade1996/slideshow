import React, { useState } from 'react'
import ImageSlider from './components/ImageSlider'
import Loading from './components/Loading'

function App() {
	const [page, setPage] = useState(0)
	setTimeout(() => {
		setPage(1)
	}, 4000);

	return(
		<div>
			{page === 0 && <Loading />}
			{page === 1 && <ImageSlider />}
		</div>
	)
	
}

export default App
