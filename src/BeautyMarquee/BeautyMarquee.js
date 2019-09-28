const BeautyMarquee = ({desktop_speed = 200, mobile_speed = 100, children, vertical = false}) => {
  const [duration, set_duration] = useState(0)
  const ulRef = useRef(null)
  const windowWidth = useWindowSize().width
  const param_pkg = {
    ulRef,
    windowWidth,
    desktop_speed,
    mobile_speed,
    set_duration
  }

  useEffect(() => {
    handle_marquee_duration(param_pkg)

    window.addEventListener('resize', () => {
      handle_marquee_duration(param_pkg)
    })

    return () => {
      window.removeEventListener('resize', () => {
        handle_marquee_duration(param_pkg)
      })
    }
  }, [windowWidth])

  return (
    <div className='beauty-marquee-box'>
      <ul
        ref={ulRef}
        style={{animationDuration: `${duration}s`}}
        className={classnames('beauty-marquee-list', {
          'horizontal': !vertical,
          'vertical': vertical
        })}>
        {Array(2).fill().map((_, index) => (
          <MarqueeItem key={`index-${index + 1}`}>
            {children}
          </MarqueeItem>
        ))}
      </ul>
    </div>
  )
}

const MarqueeItem = ({children}) => (
  <li className='beauty-marquee-item'>
    {children}
  </li>
)

const handle_marquee_duration = ({
  ulRef,
  windowWidth,
  desktop_speed,
  mobile_speed,
  set_duration
}) => {
  const width = ulRef.current.parentElement.clientWidth
  const speed = windowWidth > 768 ? desktop_speed : mobile_speed
  set_duration(width / speed)
}

import React, { Component, useState, useRef, useEffect, useContext } from 'react'
import classnames from 'classnames'
import { useWindowSize } from './WindowSizeContext'
import './BeautyMarquee.scss'

export default BeautyMarquee
