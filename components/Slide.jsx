import React from 'react'
import styled from 'styled-components'

const StyledSlide = styled.div`
  width: 100%;
`

export default function Slide({ children, id, className }) {
  return (
    <StyledSlide id={id} className={`${className} overflow-y-auto h-screen grid mt-20`}>
      <div className='flex flex-col justify-center items-center'>
      {children}
      </div>
    </StyledSlide>
  )
}
