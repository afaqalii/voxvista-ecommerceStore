import React from 'react'
import Header from './Header/Header'
import "./home.css"
import Products from './Products/Products'
import Featured from './featured/Featured'

const Home = () => {
  return (
    <div className='bg-darkBlack'>
        <Header/>
        <Products/>
        <Featured/>
    </div>
  )
}

export default Home