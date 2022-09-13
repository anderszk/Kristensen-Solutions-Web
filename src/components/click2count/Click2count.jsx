import * as React from 'react'
import './click2count.css'

const {useState} = React;

function Click2count() {
const [counter, setCounter] = useState(0)
  return (
    <div className="clicko">
        <p>{counter}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Click to increment
        </button>
    </div>
  )
}

export default Click2count