import React from 'react'
import CategoryItem from '../CategoryItem'
import s from './style.module.css'

export default function CategoryContainer({categories}) {

  return (
      <div className={s.wrapper}>
          {
              categories.map(el => <CategoryItem key={el.id} {...el} />)
          }
    </div>
  )
}
