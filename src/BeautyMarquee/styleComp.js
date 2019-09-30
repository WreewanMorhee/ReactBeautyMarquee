export const MarqueeBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  ${({vertical, reverse}) => (
    !vertical && `justify-content: ${reverse ? 'flex-start' : 'flex-end'};`
  )};
  ${({vertical, reverse}) => (
    vertical && `align-items: ${reverse ? 'flex-start' : 'flex-end'};`
  )};
`

export const MarqueeList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${({vertical}) => vertical ? 'column' : 'row'}
  width: auto;
  height: auto;
`

export const MarqueeItem = styled.li`
  width: auto;
  height: auto;
  ${({ vertical, item_size }) =>
    !vertical && item_size > 0 && `min-width: ${item_size}px;`}
  ${({ vertical, item_size }) => (
    vertical && item_size > 0 && `min-height: ${item_size}px;`
  )}
`

export const MarqueeText = styled.span`
  display: inline-block;
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
import styled, { createGlobalStyle } from 'styled-components'
