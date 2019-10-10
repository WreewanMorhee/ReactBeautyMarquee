const BeautyMarquee = ({
  desktop_speed = 200,
  mobile_speed = 100,
  children,
  vertical = false,
  reverse = false,
  stop_on_box_hover = false,
  stop_on_content_hover = false,
  turn_on = true
}) => {
  if (!turn_on) return <>{children}</>

  const [box_size, set_box_size] = useState(0)
  const [item_size, set_item_size] = useState(0)
  const UlRef = useRef(null)
  const BoxRef = useRef(null)
  const LiRef = useRef(null)
  const MarqueeController = new TimelineMax()
  const windowWidth = useWindowSize().width

  useEffect(() => {
    setTimeout(() => {
      set_ref_size(vertical, BoxRef, LiRef, set_box_size, set_item_size)
    }, 1)

    if (box_size > 0 && item_size > 0) {
      run_marquee(
        MarqueeController,
        reverse,
        UlRef,
        vertical,
        item_size,
        get_duration({
          item_size,
          windowWidth,
          desktop_speed,
          mobile_speed
        })
      )
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
        onMouseOver={hoverToToggle(MarqueeController, true, stop_on_box_hover)}
        onMouseLeave={hoverToToggle(MarqueeController, false, stop_on_box_hover)}
      >
        <MarqueeList vertical={vertical} className="beauty-marquee-list" ref={UlRef}>
          {Array(2)
            .fill()
            .map((_, index) => (
              <MarqueeItem
                vertical={vertical}
                item_size={item_size}
                className="beauty-marquee-item"
                key={`index-${index + 1}`}
                ref={LiRef}
              >
                <MarqueeText
                  onMouseOver={hoverToToggle(
                    MarqueeController,
                    true,
                    stop_on_content_hover
                  )}
                  onMouseLeave={hoverToToggle(
                    MarqueeController,
                    false,
                    stop_on_content_hover
                  )}
                >
                  {children}
                </MarqueeText>
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

const set_ref_size = (vertical, BoxRef, LiRef, set_box_size, set_item_size) => {
  const _box_size = vertical ? BoxRef.current.clientHeight : BoxRef.current.clientWidth
  const _item_size = vertical ? LiRef.current.clientHeight : LiRef.current.clientWidth

  set_box_size(_box_size)

  if (_item_size > 0) {
    set_item_size(_item_size > _box_size ? _item_size : _box_size)
  }
}

const run_marquee = (MarqueeController, reverse, UlRef, vertical, item_size,  duration) => {
  const direction = reverse ? -1 : 1
  MarqueeController.to(UlRef.current, 0, {
    x: 0,
    y: 0
  })
  MarqueeController.to(UlRef.current, duration, {
    x: vertical ? 0 : item_size * direction,
    y: vertical ? item_size * direction : 0,
    repeat: -1,
    ease: Power0.easeNone
  })
}

const get_gap = (gap, item_size, box_size, windowWidth) => {
  return typeof gap === 'number' ? gap : item_size > box_size ? (50 * windowWidth) / 1920 : 0
}

const hoverToToggle = (MarqueeController, hover, stopWhenHover) => () => {
  if (!stopWhenHover) return

  if (hover) {
    MarqueeController.pause()
  } else {
    MarqueeController.resume()
  }
}







import React, { Component, useState, useRef, useEffect, useContext } from 'react'
import { Power0, TimelineMax } from 'gsap'
import { useWindowSize } from './WindowSizeContext'
import { ResetStyle, MarqueeBox, MarqueeList, MarqueeItem, MarqueeText } from './styleComp'
export default BeautyMarquee
