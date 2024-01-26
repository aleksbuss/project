import React from 'react'
import { useSelector } from 'react-redux';
import ProductCart from '../../components/ProductCart';
import s from './style.module.css'

export default function SearchPage() {

    const searchResults = useSelector(state => state.search.searchResults);  

  return (
      <div className={s.wrapper}>
             {
            searchResults.map(el => <ProductCart key={el.id} {...el} />)
        }
    </div>
  )
}
