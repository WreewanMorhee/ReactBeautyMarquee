export const MarqueeBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: ${({vertical, reverse}) => {
    if (vertical) {
      return reverse ? 'flex-start' : 'flex-end'
    }
    return reverse ? 'flex-end' : 'flex-start'
  }};
`

export const MarqueeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-width: ${({vertical}) => vertical ? 100 : 200}%;
  min-height: ${({vertical}) => vertical ? 200 : 100}%;
  animation: ${({vertical, reverse}) => {
    if (vertical) {
      return reverse ? v_marquee_effect_r : v_marquee_effect
    }
    return reverse ? h_marquee_effect_r : h_marquee_effect
  }} 5s linear infinite;
  animation-duration: ${({duration}) => duration}s
`

export const MarqueeItem = styled.li`
 width: ${({vertical}) => vertical ? 100 : 50}%;
 height: ${({vertical}) => vertical ? 50 : 100}%;
`






const h_marquee_effect = keyframes`
  from {
    transform: translateX(0)
  }

  to {
    transform: translateX(-50%)
  }
`

const h_marquee_effect_r = keyframes`
  from {
    transform: translateX(0)
  }

  to {
    transform: translateX(50%)
  }
`

const v_marquee_effect = keyframes `
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(50%)
  }
`
const v_marquee_effect_r = keyframes `
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(-50%)
  }
`

export const ResetStyle = createGlobalStyle`
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`
import styled, { keyframes, createGlobalStyle } from 'styled-components'
