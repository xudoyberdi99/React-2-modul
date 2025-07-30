import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='container'>
			<div className='text-center mt-5'>
				<p className='fs-3'>{count}</p>
			</div>
			<div className='d-flex justify-content-evenly'>
				<button
					className='btn btn-primary p-3 text-uppercase'
					onClick={() => setCount(count + 1)}
				>
					Increment
				</button>
				<button
					className='btn btn-primary p-3 text-uppercase'
					onClick={() => setCount(count - 1)}
				>
					Decrement
				</button>
				<button
					className='btn btn-primary p-3 text-uppercase'
					onClick={() => setCount(0)}
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default App
