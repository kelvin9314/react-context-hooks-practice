import React, { } from 'react'
import { Link } from 'react-router-dom'

import '../style/home.scss'

const Home = (params) => {
  
  return (
    <div className="home-page">
      <h1>Home page</h1>
      <div className="page">
          <Link to="/book"> Book List </Link> 
          <Link to="/memo"> useMemo Example </Link> 
      </div>
    </div>
  )
}

export default Home
