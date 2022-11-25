import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Services() {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}
      showThumbs={false}
       >

        <div>
            <img src={require('../assets/3.jpg')} alt="our services 1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={require('../assets/4.jpg')} alt=" our services 2" />
            <p className='legend'>Peer to peer Support</p>
        </div>
        </Carousel>  
    </div>
  )
}

export default Services