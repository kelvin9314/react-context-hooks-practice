import React, { useMemo, useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'

// memo, here stands for memoization, the idea of caching a value
// case 1: slow function
// case 2: referential equality

import '../style/memo.scss'

const Memo = (params) => {
  let history = useHistory();
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // once you update state, react is going to re-render your entire component 
  // This slowFunction will be called every single time that we render this component
  // const doubleNumber = slowFunction(number) 

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  
  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  // }

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme changed ')
  }, [themeStyles])
  
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
  // console.log('calling Slow Function')
  for (let i = 0; i < 1e9; i++) {}

  return num *= 2

}

export default Memo
