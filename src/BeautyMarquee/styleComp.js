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
    return reverse ? 'flex-start' : 'flex-end'
  }};
`

export const MarqueeList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: auto;
`

export const MarqueeItem = styled.li`
  width: auto;
  height: auto;
  min-width: ${({ vertical, min_size }) => (vertical ? "" : min_size)}px;
  min-height: ${({ vertical, min_size }) => (vertical ? min_size : "")}px;
  padding: ${({ vertical, gap }) => (vertical ? gap / 2 : 0)}px
    ${({ vertical, gap }) => (vertical ? 0 : gap / 2)}px;
  white-space: pre;
`

export const MarqueeText = styled.span`
  display: inline-block;
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
