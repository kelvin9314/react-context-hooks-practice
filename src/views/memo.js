import React, { useMemo, useState } from 'react'
import { useHistory} from 'react-router-dom'

import '../style/memo.scss'

const Memo = (params) => {
  let history = useHistory();
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = slowFunction(number)

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }
  
  return (
    <div className="memo-page">
      <button onClick={() =>  history.push("/")}>
        Home Page
      </button>
      <h1>Memo page</h1>
      <input 
        type="number" 
        value={number} 
        onChange={ e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}> Change Theme</button>
      <div style={themeStyles}> {doubleNumber} </div>
    </div>
  )
}

function slowFunction(num) {
  console.log('calling Slow Function')
  for (let i = 0; i < 1e9; i++) {}

  return num *= 2

}

export default Memo
