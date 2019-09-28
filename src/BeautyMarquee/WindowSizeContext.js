export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    window.addEventListener('resize', handleResize(setWindowSize))

    return () => {
      window.removeEventListener('resize', handleResize(setWindowSize))
    }
  }, [])

  return windowSize
}

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})

const handleResize = setWindowSize => () => {
  setWindowSize(getSize())
}





import React, { useState, useEffect } from 'react'

export const WindowWidthContext = React.createContext(window.innerWidth)
export const WindowWidthProvider = WindowWidthContext.Provider
export const WindowWidthConsumer = WindowWidthContext.Consumer

export const WindowHeightContext = React.createContext(window.innerHeight)
export const WindowHeightProvider = WindowHeightContext.Provider
export const WindowHeightConsumer = WindowHeightContext.Consumer
