// import { useDispatch, useSelector } from "react-redux";
// import { searchProductsAction } from "../../store/reducers/searchReducer";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Magglass from './magnifyingglass.png'
// import s from './style.module.css'



// export default function Search () {
//     const dispatch = useDispatch();
//     const allProducts = useSelector(state => state.allProducts); // Замените на вашу собственную селектор-функцию
  
//   const [searchQuery, setSearchQuery] = useState('');
  
  
//     const handleSearch = () => {
//       const searchResults = allProducts.filter(el =>
//         el.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       dispatch(searchProductsAction(searchResults));   
//   };
  
//     return (
//         <div className={s.wrapper}>
//         {/* <input
//           type="text"
//           placeholder="Введите запрос"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
          
//           /> */}
//         <Link to="./searched_products"> 
//           {/* <img className={s.img} src={Magglass} alt="logo" onClick={handleSearch} />      */}
//         </Link>   
//       </div>
//     );
//   };
  

// import React from 'react';
// import { useSelector } from 'react-redux';
// import SearchWithAutocomplete from '../SearchResultPage';


// const SearchPage = () => {
//   const allProducts = useSelector(state => state.allProducts);

//   return (
//     <div>
//       <h1>Поиск продуктов</h1>
//       <SearchWithAutocomplete allProducts={allProducts} />
//       {/* Другой код для отображения результатов поиска */}
//     </div>
//   );
// };

// export default SearchPage;
