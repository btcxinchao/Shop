import React from 'react'
import "./Home.scss"
import LatestColection from '../../components/latest/LatestColection'
const Home = () => {
  return (
    <>
    <section id='home'>
      <div className='container'>
        <div className='row'>
          <div className='col-left'>
            <div className='title-home'>
              <p>----OUR BESTSELLER</p>
              <h1> LASTEST ARRIVAL</h1>
              <p>SHOP NOW----</p>
            </div>
          </div>
          <div className='col-right'>
            <img src='https://sakidorico.s3.amazonaws.com/wp/wp-content/uploads/2023/08/64d95d6730d22.jpg' alt='thoitrang' />
          </div>
        </div>
      </div>
    </section>
    <LatestColection/>
    </>
  )
}


export default Home
