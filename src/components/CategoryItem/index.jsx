import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import Wrapper from '../UI/Wrapper'

export default function CategoryItem({ id, image, title }) {

  const img = `http://localhost:3333/${image}`

  return (
    <Wrapper>
    <Link to={`/categories/${id}`}>
      <div className={s.categoryItem}>
        {/* <p>{title }</p> */}
            <img src={img} alt="" />
        </div>
    </Link>
    </Wrapper>
  )
}
