import React, { useMemo } from 'react'
import { useHistory} from 'react-router-dom'

import '../style/memo.scss'

const Memo = (params) => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  
  return (
    <div className="memo-page">
      <button onClick={handleClick}>
        Home Page
      </button>
      <h1>Memo page</h1>
    </div>
  )
}

export default Memo
