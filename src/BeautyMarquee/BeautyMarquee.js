const BeautyMarquee = ({
  desktop_speed = 200,
  mobile_speed = 100,
  children,
  vertical = false,
  reverse = false,
  gap = undefined
}) => {
  const [box_size, set_box_size] = useState(0)
  const [item_size, set_item_size] = useState(0)
  const UlRef = useRef(null)
  const BoxRef = useRef(null)
  const LiRef = useRef(null)
  const windowWidth = useWindowSize().width
  const param_pkg = {
    item_size,
    windowWidth,
    desktop_speed,
    mobile_speed
  }

  useEffect(() => {
    setTimeout(() => {
      const _box_size = vertical ? BoxRef.current.clientHeight : BoxRef.current.clientWidth
      const _item_size = vertical ? LiRef.current.clientHeight :  LiRef.current.clientWidth

      set_box_size(_box_size)

      if (_item_size > 0) {
        set_item_size(_item_size > _box_size ? _item_size : _box_size)
      }
    }, 1)

    if (box_size > 0 && item_size > 0) {
      const direction = reverse ? -1 : 1
      TweenMax.to(UlRef.current, 0, {
        x: 0,
        y: 0
      })
      TweenMax.to(UlRef.current, get_duration(param_pkg), {
        x: vertical ? 0 : item_size * direction,
        y: vertical ? item_size * direction : 0,
        repeat: -1,
        ease: Power0.easeNone
      })
    }
  }, [windowWidth, box_size, item_size])

  return (
    <>
      <ResetStyle />

      <MarqueeBox
        ref={BoxRef}
        vertical={vertical}
        reverse={reverse}
        className="beauty-marquee-box"
      >
        <MarqueeList className="beauty-marquee-list" ref={UlRef}>
          {Array(2)
            .fill()
            .map((_, index) => (
              <MarqueeItem
                gap={
                  typeof gap === 'number' ? gap : item_size > box_size ? (50 * windowWidth) / 1920 : 0
                }
                vertical={vertical}
                min_size={box_size}
                className="beaurty-marquee-item"
                key={`index-${index + 1}`}
                ref={LiRef}
              >
                {children}
              </MarqueeItem>
            ))}
        </MarqueeList>
      </MarqueeBox>
    </>
  )
}



const get_duration = ({
  item_size,
  windowWidth,
  desktop_speed,
  mobile_speed,
}) => {
  const speed = windowWidth > 768 ? desktop_speed : mobile_speed
  return item_size / speed
}







import React, { Component, useState, useRef, useEffect, useContext } from 'react'
import { TweenMax, Power0 } from 'gsap'
import { useWindowSize } from './WindowSizeContext'
import { ResetStyle, MarqueeBox, MarqueeList, MarqueeItem } from './styleComp'
export default BeautyMarquee
