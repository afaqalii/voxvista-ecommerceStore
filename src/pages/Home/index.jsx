import React from 'react'
import Header from './Header/Header'
import "./home.css"
import Products from './Products/Products'

const Home = () => {
  return (
    <div className='bg-darkBlack'>
        <Header/>
        <Products/>
    </div>
  )
}

export default Home