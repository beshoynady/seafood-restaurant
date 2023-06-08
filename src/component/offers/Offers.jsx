import React from 'react'
import './Offers.css';

import { Navigation, Pagination, A11y, EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {cartcontext} from '../../App.jsx'




const Offers = () => {
  return (
    <cartcontext.Consumer>
          {
            ({products_menu, getcartitemsdata, increment, descrement})=>{
              return(
                <section className='offers' id='offer'>
                  <div className="container">
                    <h1>Offers</h1>
                    <Swiper className='swiper'
                        modules={[
                        Navigation,
                        Pagination,
                        EffectCoverflow,
                        A11y
                        ]}
                        spaceBetween={50}
                        navigation={true}
                        autoplay
                        pagination={{ clickable: true }}
                        effect="coverflow"
                        grabCursor={true}
                        slidesPerView={'5'}
                        centeredSlides={false}
                        coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 50,
                        modifier: .5,
                        slideShadows: true,
                        }}
                    >
                    {products_menu.filter((pro)=>pro.category === "وجبات").map((product, index) =>{
                      return(
                        <SwiperSlide className="card" key={index}>
                          <img src={require(`../../image/menu/${product.img}`)} alt="" />
                          <div className="card-details">
                          <div className='prod-det'>
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                          </div>
                          <div className="price">
                            <p>السعر{product.price}</p>
                            <div className="count">
                              <button className='symb' onClick={()=>descrement(product.id)}>-</button>
                              <span className='num'>{product.count<1?0:product.count}</span>
                              <button className='symb' onClick={()=>increment(product.id)}>+</button>
                            </div>
                          </div>
                            <div className='add_cart'>
                              <button onClick={()=>{if(product.count>0){getcartitemsdata(product.id, product.count)}}}>اضف الي طلباتي</button>
                            </div>
                          </div>
                        </SwiperSlide>
                      )})
                    }
                  )
                  </Swiper>
                  </div>
                </section>
              )
            }
          }   
    </cartcontext.Consumer>       
  )
}
export default Offers