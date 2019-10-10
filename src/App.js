const App = () => (
  <>
    <div className='box'>
      <div className='top-box'>
        <div className='test1'>
           <BeautyMarquee stop_on_box_hover desktop_speed={200} mobile_speed={100}>
             <div>REACT BEAUTY MARQUEE</div>
           </BeautyMarquee>
        </div>
        <div className='test1'>
           <BeautyMarquee stop_on_box_hover desktop_speed={150} mobile_speed={100} reverse>
             <div>REACT BEAUTY MARQUEE</div>
           </BeautyMarquee>
        </div>
      </div>

      <div className='bottom-box'>
            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={200} mobile_speed={100} vertical reverse>
                <div className='text-text'>最美最好用的跑馬燈</div>
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={100} mobile_speed={100} vertical>
                <div className='text-text'>Das schönste und nützlichste Festzelt, das Sie jemals brauchen werden</div>
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={100} mobile_speed={100} vertical reverse>
                <div className='text-text'>最も美しくて便利なマーキー</div>
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={250} mobile_speed={100} vertical>
                <div className='text-text'>самый красивый и полезный шатер, который вам когда-либо понадобится</div>
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={50} mobile_speed={100} vertical reverse>
                <div className='text-text'>가장 아름답고 유용한 천막</div>
              </BeautyMarquee>
            </div>

            <div className='test2'>
              <BeautyMarquee stop_on_box_hover desktop_speed={150} mobile_speed={100} vertical>
                <div className='text-text'>the most beautiful and useful marquee you will ever need</div>
              </BeautyMarquee>
            </div>
      </div>


      <div className='img-wall'>
        {Array(2).fill().map((_, index) => (
          <BeautyMarquee key={`index-${index + 1}`} desktop_speed={150} mobile_speed={100} reverse={index === 1}>
            <div className='img-bar'>
              {Array(6).fill().map((_, index2) => (
                 <img key={`index2-${index2 + 1}`} src={`./images/${index2 + 1}.jpg`} />
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
            <p><span style={{color: '#e23663'}}>&lt;div className='react-beauty-marquee'&gt;</span>&nbsp;&nbsp;<span style={{color: '#888888'}}>{`// step1. draw the region of marquee and adjust its position in this div`}</span></p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#e23663'}}>&lt;BeautyMarquee&nbsp;stop_on_box_hover desktop_speed={'{'}200{'}'}&nbsp;mobile_speed={'{'}100{'}'}&gt;&nbsp;&nbsp;</span><span style={{color: '#888888'}}>{`// step3. once you have your marquee content CSS&nbsp;done, add the BeautyMarquee component to trigger it !`}</span></p>
            <p>&nbsp;</p>
            <p><span style={{color: '#e23663'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;div className='outer-box'&gt;&nbsp;&nbsp;</span><span style={{color: '#888888'}}>{`// step2. adjust the content of marquee with your own CSS in this div and add content into it`}</span></p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style={{color: '#888888'}}>/*&nbsp; the content you want to the marquee&nbsp;*/</span></p>
            <p><span style={{color: '#888888'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style={{color: '#e23663'}}> &lt;/div&gt;</span></p>
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#e23663'}}>&lt;/BeautyMarquee &gt;</span></p>
            <p>&nbsp;</p>
            <p><span style={{color: '#e23663'}}>&lt;/div&gt;</span></p>
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
    <p><span style={{fontSize: '28px'}}>stop_on_box_hover</span></p>
    <p>type: boolean</p>
    <p>default: false</p>
    <p>usage: if true, marquee will stop when user hover marquee region</p>
    <p>&nbsp;</p>
    <p><span style={{fontSize: '28px'}}>stop_on_content_hover</span></p>
    <p>type: boolean</p>
    <p>default: false</p>
    <p>usage: if true, marquee will stop when user hover marquee content</p>
    <p>&nbsp;</p>
    <p><span style={{fontSize: '28px'}}>turn_on</span></p>
    <p>type: boolean</p>
    <p>default: true</p>
    <p>usage: if true, will run marquee, otherwise, won't trigger marquee</p>
    </div>
            </div>
        </div>

    </>
)




import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Slick from 'react-slick'
import BeautyMarquee from 'react-beauty-marquee'
import './reset.css'
import './App.css'
ReactDOM.render(<App />, document.getElementById('app'))
