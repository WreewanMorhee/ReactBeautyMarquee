const BeautyMarquee = ({
  desktop_speed = 200,
  mobile_speed = 100,
  children,
  vertical = false,
  reverse = false
}) => {
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

    window.addEventListener("resize", () => {
      handle_marquee_duration(param_pkg)
    })

    return () => {
      window.removeEventListener("resize", () => {
        handle_marquee_duration(param_pkg)
      })
    }
  }, [windowWidth])

  return (
    <>
      <ResetStyle />

      <MarqueeBox
        vertical={vertical}
        reverse={reverse}
        className="beauty-marquee-box"
      >
        <MarqueeList
          className="beauty-marquee-list"
          ref={ulRef}
          vertical={vertical}
          reverse={reverse}
          duration={duration}
        >
          {Array(2)
            .fill()
            .map((_, index) => (
              <MarqueeItem
                className="beaurty-marquee-item"
                vertical={vertical}
                key={`index-${index + 1}`}
              >
                {children}
              </MarqueeItem>
            ))}
        </MarqueeList>
      </MarqueeBox>
    </>
  )
}

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
import { useWindowSize } from './WindowSizeContext'
import { ResetStyle, MarqueeBox, MarqueeList, MarqueeItem } from './styleComp'
export default BeautyMarquee
