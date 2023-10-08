import React from 'react'
import Wrapper from '../UI/Wrapper'
import img from './error.png'
import s from './style.module.css'

export default function Error() {
  return (
      <Wrapper style={{ display: "flex", justifyContent: "center" }}>
          <img className={s.error} src={img} alt="error_image" />
      </Wrapper>
  )
}
