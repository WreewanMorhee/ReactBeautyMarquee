const App = () => (
    <div className='box'>
      <div className='top-box'>
        <div className='test1'>
           <BeautyMarquee desktop_speed={200} mobile_speed={100}>
            React Beauty Marquee
           </BeautyMarquee>
        </div>

        <div className='test1'>
           <BeautyMarquee reverse desktop_speed={200} mobile_speed={100}>
            React Beauty Marquee
           </BeautyMarquee>
        </div>
      </div>

      <div className='bottom-box'>
        <div className='test2'>
          <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical >
            歡迎使用全世界最棒的跑馬燈
          </BeautyMarquee>
        </div>

        <div className='test2'>
          <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical reverse>
            世界最高のマーキーへようこそ
          </BeautyMarquee>
        </div>

        <div className='test2'>
          <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical >
            세계 최고의 천막에 오신 것을 환영합니다
          </BeautyMarquee>
        </div>
      </div>
    </div>
)






import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BeautyMarquee from './BeautyMarquee/BeautyMarquee'
import Slick from 'react-slick'
import './App.css'
ReactDOM.render(<App />, document.getElementById('app'))
