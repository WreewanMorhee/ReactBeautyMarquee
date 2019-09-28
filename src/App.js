const App = () => (
    <div className='box'>
      <div className='top-box'>
        <div className='test1'>
           <BeautyMarquee desktop_speed={200} mobile_speed={100}>
             React Beautiful Marquee
           </BeautyMarquee>
        </div>
        <div className='test1'>
           <BeautyMarquee desktop_speed={200} mobile_speed={100} reverse>
             React Beautiful Marquee
           </BeautyMarquee>
        </div>
      </div>

      <div className='bottom-box'>
            <div className='test2'>
              <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical >
                最美最好用的跑馬燈最美最好用的跑馬燈最美最好用的跑馬燈
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical reverse>
                最も美しくて便利なマーキー
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical >
                가장 아름답고 유용한 천막
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
