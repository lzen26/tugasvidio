import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './App.css'
import phone_video from './assets/phone_video.mp4';
import gambar2 from './assets/gambar2.png';
import gambar3 from './assets/gambar3.png';
import gambar4 from './assets/gambar4.png';
import gambar5 from './assets/gambar5.png';
import gambar6 from './assets/gambar6.png';
import gambar7 from './assets/gambar7.png';
import gambar8 from './assets/gambar8.png';
import gambar9 from './assets/gambar9.png';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
function App() {

  return (
    <>
    <div>
      <div className='components1'></div>
      <p className='kepala1'>IPHONE</p>
      <p className='kepala2'>DIDESAIN UNTUK DICINTAI</p>
    </div>

    <div style={{display:'flex', justifyContent:'center',}}>
          <video className='video' controls>
            <source src={phone_video} type="video/mp4" />
          </video>
        </div>

        <div className='components2'>
        <p className='kepala3'>KENALI IPHONE LEBIH DALAM</p>
        </div>
      <div classname='kepala4'>
      <Swiper
        
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><img classname='gambar2'src={gambar2} alt='gambar2'/></SwiperSlide>
        <SwiperSlide><img classname='gambar3'src={gambar3} alt='gambar3'/></SwiperSlide>
        <SwiperSlide><img classname='gambar4'src={gambar4} alt='gambar4'/></SwiperSlide>
        <SwiperSlide><img classname='gambar5'src={gambar5} alt='gambar5'/></SwiperSlide>
        <SwiperSlide><img classname='gambar6'src={gambar6} alt='gambar6'/></SwiperSlide>
        <SwiperSlide><img classname='gambar7'src={gambar7} alt='gambar7'/></SwiperSlide>
        </Swiper>
        
        
        
       
        
        
        
        </div>


        <div className='TombolButton'>
        <img classname='gambar9'src={gambar9} alt='gambar9'/>
        <img classname='gambar8'src={gambar8} alt='gambar8'/>

     </div>
    </>
  )
}

export default App
