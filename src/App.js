const App = () => (
  <>
    <div className='test-box'>
       <BeautyMarquee desktop_speed={200} mobile_speed={100}>
        test
       </BeautyMarquee>
    </div>

    <div className='verticla-test'>
      <BeautyMarquee desktop_speed={50} mobile_speed={100} vertical>
        aa bb cc ss dd
      </BeautyMarquee>
    </div>
  </>
)





import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BeautyMarquee from './BeautyMarquee/BeautyMarquee';
import './App.css'
ReactDOM.render(<App />, document.getElementById('app'));
