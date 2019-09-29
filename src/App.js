const App = () => (
  <>
    <div className='box'>
      <div className='top-box'>
        <div className='test1'>
           <BeautyMarquee stop_on_box_hover desktop_speed={200} mobile_speed={100}>
             React Beauty Marquee
           </BeautyMarquee>
        </div>
        <div className='test1'>
           <BeautyMarquee stop_on_box_hover desktop_speed={150} mobile_speed={100} reverse>
             React Beauty Marquee
           </BeautyMarquee>
        </div>
      </div>

      <div className='bottom-box'>
            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={150} mobile_speed={100} vertical reverse>
                最美最好用的跑馬燈
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={50} mobile_speed={100} vertical>
                Das schönste und nützlichste Festzelt, das Sie jemals brauchen werden
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={100} mobile_speed={100} vertical reverse>
                最も美しくて便利なマーキー
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={200} mobile_speed={100} vertical>
                самый красивый и полезный шатер, который вам когда-либо понадобится
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={250} mobile_speed={100} vertical reverse>
                가장 아름답고 유용한 천막
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={150} mobile_speed={100} vertical>
                the most beautiful and useful marquee you will ever need
              </BeautyMarquee>
            </div>
      </div>


      <div className='img-wall'>
        {Array(2).fill().map((_, index) => (
          <BeautyMarquee desktop_speed={150} mobile_speed={100} reverse={index === 1}>
            <div className='img-bar'>
              {Array(6).fill().map((_, index2) => (
                 <img src={`./images/${index2 + 1}.jpg`} />
              ))}
            </div>
          </BeautyMarquee>
        ))}
      </div>
    </div>

    <div className='second-box'>

      <div className='title'>
       JSX
      </div>

            <div className='html'>
              <p><span style={{fontSize: '18px'}}><span style={{color: '#e23663'}}>&lt;div className='react-beauty-marquee'&gt;</span>&nbsp; <span style={{color: '#888888'}}>// draw the region of marquee and adjust its position</span></span></p>
              <p><span style={{fontSize: '18px'}}>&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color: '#e23663'}}>&lt;BeautyMarquee </span><span style={{color: '#e23663'}}>stop_on_box_hover desktop_speed={'{'}200{'}'}<span style={{color: '#e23663'}}> </span>mobile_speed={'{'}100{'}'}</span><span style={{color: '#e23663'}}>&gt;</span></span></p>
              <p><span style={{fontSize: '18px'}}>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span style={{color: '#888888'}}>/*&nbsp; the content you want to marquee&nbsp;*/</span></span></p>
              <p><span style={{fontSize: '18px'}}>&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color: '#e23663'}}>&lt;/BeautyMarquee &gt;</span></span></p>
              <p><span style={{fontSize: '18px'}}><span style={{color: '#e23663'}}>&lt;/div&gt;</span></span></p>
            </div>

            <div className='title title2'>
             Props
            </div>

            <div className='html'>
            <div>
  <p><span style={{fontSize: '28px'}}>desktop_speed</span></p>
  <p>type: number</p>
  <p>default: 200</p>
  <p>usage: marquee speed in desktop (window.innerWidth &gt; 768)</p>
  <p>&nbsp;</p>
  <p><span style={{fontSize: '28px'}}>mobile_speed</span></p>
  <p>type: number</p>
  <p>default: 100</p>
  <p>usage: marquee speed in mobile(window.innerWidth &lt;=&nbsp;768)</p>
  <p>&nbsp;</p>
  <p><span style={{fontSize: '28px'}}>vertical</span></p>
  <p>type: boolean</p>
  <p>default: false</p>
  <p>usage: if true, change marquee to vertical</p>
  <p>&nbsp;</p>
  <p><span style={{fontSize: '28px'}}>reverse</span></p>
  <p>type: boolean</p>
  <p>default: false</p>
  <p>usage: if horizontal, marque move from left to right, reverse will from right to left</p>
  <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if vertical, marquee move from top to bottom, reverse will from bottom to top</p>
  <p>&nbsp;</p>
  <p><span style={{fontSize: '28px'}}>gap</span></p>
  <p>type: number</p>
  <p>default: undefined</p>
  <p>usage: the gap between content of marquee</p>
  <p>&nbsp;</p>
  <p><span style={{fontSize: '28px'}}>stop_on_box_hover</span></p>
  <p>type: boolean</p>
  <p>default: false</p>
  <p>usage: if true, marquee will stop when user hover marquee region</p>
  <p>&nbsp;</p>
  <p><span style={{fontSize: '28px'}}>stop_on_content_hover</span></p>
  <p>type: boolean</p>
  <p>default: false</p>
  <p>usage: if true, marquee will stop when user hover marquee content</p>
</div>
            </div>
    </div>

    </>
)




import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Slick from 'react-slick'
import BeautyMarquee from './BeautyMarquee/BeautyMarquee'
import './reset.css'
import './App.css'
ReactDOM.render(<App />, document.getElementById('app'))
