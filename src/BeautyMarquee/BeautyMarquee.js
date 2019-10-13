const BeautyMarquee = ({
  desktop_speed,
  mobile_speed,
  children,
  vertical,
  reverse,
  stop_on_box_hover,
  stop_on_content_hover,
  turn_on,

  windowWidth,
  set_ref_size,
  run_marquee,
  item_size,
  box_size,
  setBoxRef,
  setUlRef,
  setLiRef,
  hoverToToggle
}) => {
  if (!turn_on) return <>{children}</>

  const MarqueeController = new TimelineMax()

  useEffect(() => {
    setTimeout(() => {
      set_ref_size()
    }, 3)

    if (box_size > 0 && item_size > 0) {
      run_marquee(MarqueeController)
    }
  }, [windowWidth, box_size, item_size])

  return (
    <>
      <ResetStyle />

      <MarqueeBox
        ref={setBoxRef}
        vertical={vertical}
        reverse={reverse}
        className="beauty-marquee-box"
        onMouseOver={hoverToToggle(true, stop_on_box_hover, MarqueeController)}
        onMouseLeave={hoverToToggle(false, stop_on_box_hover, MarqueeController)}
      >
        <MarqueeList vertical={vertical} className="beauty-marquee-list" ref={setUlRef}>
          {Array(2)
            .fill()
            .map((_, index) => (
              <MarqueeItem
                vertical={vertical}
                item_size={item_size}
                className="beauty-marquee-item"
                key={`index-${index + 1}`}
              >
                <MarqueeText
                  ref={setLiRef}
                  onMouseOver={hoverToToggle(true, stop_on_content_hover, MarqueeController)}
                  onMouseLeave={hoverToToggle(false, stop_on_content_hover, MarqueeController)}
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





const stateBox1 = withState('box_size', 'set_box_size', 0)
const stateBox2 = withState('item_size', 'set_item_size', 0)

const logicBox = withHandlers(() => {
  let BoxRef
  let UlRef
  let LiRef

  return {
    set_ref_size: ({ vertical, set_box_size, set_item_size }) => () => {
      const _box_size = vertical ? BoxRef.clientHeight : BoxRef.clientWidth
      const _item_size = vertical ? LiRef.clientHeight : LiRef.clientWidth

      set_box_size(_box_size)

      if (_item_size > 0) {
        set_item_size(_item_size > _box_size ? _item_size : _box_size)
      }
    },
    run_marquee: ({
      reverse,
      vertical,
      item_size,
      mobile_speed,
      desktop_speed,
      windowWidth
    }) => (MarqueeController) => {
      const duration = get_duration({
        item_size,
        windowWidth,
        desktop_speed,
        mobile_speed
      })
      const direction = reverse ? -1 : 1
      MarqueeController.to(UlRef, 0, {
        x: 0,
        y: 0
      })
      MarqueeController.to(UlRef, duration, {
        x: vertical ? 0 : item_size * direction,
        y: vertical ? item_size * direction : 0,
        repeat: -1,
        ease: Power0.easeNone
      })
    },
    hoverToToggle: ({ stop_on_box_hover }) => (hover, stopWhenHover, MarqueeController) => () => {
      if (!stopWhenHover) return

      if (hover) {
        MarqueeController.pause()
      } else {
        MarqueeController.resume()
      }
    },
    setBoxRef: () => ref => (BoxRef = ref),
    setUlRef: () => ref => (UlRef = ref),
    setLiRef: () => ref => (LiRef = ref)
  }
})


const get_duration = ({
  item_size,
  windowWidth,
  desktop_speed,
  mobile_speed,
}) => {
  const speed = windowWidth > 768 ? desktop_speed : mobile_speed
  return item_size / speed
}






import React, { useState, useRef, useEffect } from 'react'
import { compose, withHandlers, withState, withProps, mapProps } from 'recompose'
import { Power0, TimelineMax } from 'gsap'
import { useWindowSize } from './WindowSizeContext'
import { ResetStyle, MarqueeBox, MarqueeList, MarqueeItem, MarqueeText } from './styleComp'
export default compose(
  mapProps(
    ({
      desktop_speed = 200,
      mobile_speed = 100,
      vertical = false,
      reverse = false,
      stop_on_box_hover = false,
      stop_on_content_hover = false,
      turn_on = true,
      children
    }) => ({
      desktop_speed,
      mobile_speed,
      vertical,
      reverse,
      stop_on_box_hover,
      stop_on_content_hover,
      turn_on,
      children,
      windowWidth: useWindowSize().width
    })
  ),
  stateBox1,
  stateBox2,
  logicBox
)(BeautyMarquee)
