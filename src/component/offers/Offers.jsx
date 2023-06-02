import React from 'react'
import './Offers.css';
import products from '../../products.json'
import { useState } from 'react';

import { Navigation, Pagination, A11y, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';




const Offers = () => {
  const [count, setcount] = useState(2)

  const increment =(id) =>{ 
    setcount(count + 1)
    products[id].count = products[id].count + 1;
  };

  const descrement =(id) =>{
    setcount(count -1)
    products[id].count = products[id].count - 1;
  } ;
  return (
    <section className='offers' id='offer'>
        <div className="container">
          <h1>Offers</h1>
              <Swiper className='swiper'
                  modules={[
                  Navigation,
                  Pagination,
                  EffectCoverflow
                  ]}
                  spaceBetween={50}
                  navigation={true}
                  autoplay
                  pagination={{ clickable: true }}
                  effect="coverflow"
                  grabCursor={true}
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 50,
                  modifier: .5,
                  slideShadows: true,
                  }}
              >
            {products&&products.map((product, index) =>{
              return(
                <SwiperSlide className="card" key={index}>
                  <img src={require(`../../image/${product.img}`)} alt="" />
                  <div className="card-details">
                  <div className='prod-det'>
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                  </div>
                  <div className="price">
                    <p>السعر{product.price}</p>
                    <div className="count">
                      <button className='symb' onClick={()=>descrement(index)}>-</button>
                      <span className='num'>{product.count<1?0:product.count}</span>
                      <button className='symb' onClick={()=>increment(index)}>+</button>
                    </div>
                  </div>
                    <div className='add_cart'>
                      <button>اضف الي طلباتي</button>
                    </div>
                  </div>
                </SwiperSlide>
              )})}
          </Swiper>
          
        </div>
    </section>
  )
}
export default Offers