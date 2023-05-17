import React from 'react'
import styled from 'styled-components'

const StyledSlide = styled.div`
  width: 100%;
`

export default function Slide({ children, id, className }) {
  return (
    <StyledSlide id={id} className={`${className} overflow-y-auto h-full flex flex-col justify-center items-center mt-10`}>
      {children}
    </StyledSlide>
  )
}
