import { useDispatch, useSelector } from "react-redux";
import { searchProductsAction } from "../../store/reducers/searchReducer";
import { useState } from "react";
import { Link } from "react-router-dom";
import Magglass from './magnifyingglass.png'
import s from './style.module.css'



export default function Search () {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProducts); // Замените на вашу собственную селектор-функцию
  
  const [searchQuery, setSearchQuery] = useState('');
  
  
    const handleSearch = () => {
      const searchResults = allProducts.filter(el =>
        el.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch(searchProductsAction(searchResults));
  };
  
    return (
        <div className={s.wrapper}>
        <input
          type="text"
          placeholder="Введите запрос"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          
          />
        <Link to="./searched_products">
          <img className={s.img} src={Magglass} alt="logo" onClick={handleSearch} />
        </Link>
      </div>
    );
  };
  

// import { useDispatch, useSelector } from "react-redux";
// import { searchProductsAction } from "../../store/reducers/searchReducer";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Magglass from './magnifyingglass.png'
// import s from './style.module.css'
// import _ from 'lodash'; // import lodash for debouncing

// export default function Search () {
//     const dispatch = useDispatch();
//     const allProducts = useSelector(state => state.allProducts); 

//     const [searchQuery, setSearchQuery] = useState('');

//     // Debounce the handleSearch function
//     const debouncedHandleSearch = _.debounce(handleSearch, 500);

//     useEffect(() => {
//         debouncedHandleSearch();
//         // Cleanup on unmount
//         return () => {
//             debouncedHandleSearch.cancel();
//         };
//     }, [searchQuery]);

//     function handleSearch() {
//         if (!allProducts) {
//             console.error('allProducts is null or undefined');
//             return;
//         }

//         const searchResults = allProducts.filter(el =>
//             el.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         dispatch(searchProductsAction(searchResults));   
//     };
  
//     return (
//         <div className={s.wrapper}>
//         <input
//           type="text"
//           placeholder="Введите запрос"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//         />
//         {/* Rest of the JSX */}
//         </div>
//     );
// }
