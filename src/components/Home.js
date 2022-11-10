import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
  <img src="https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg?w=2000" class="card-img" height="650px" alt="..."/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className='container'>
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS</p>
   
    </div>
   
  </div>
</div>
      <Products/>
    </div>
  )
}

export default Home
