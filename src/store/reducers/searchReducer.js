


// const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

// export const searchProductsAction = payload => ({type: SEARCH_PRODUCTS,payload});

// const initialState = {
//   searchResults: [], // Инициализируем пустым массивом, чтобы хранить результаты поиска
// };

// export const searchReducer = (state = initialState, action) => {
//   if (action.type === SEARCH_PRODUCTS) {
    
//     console.log(action.payload);
//     return {...state,searchResults: action.payload};
//   } else {
//     return state;
//   }
// };



// const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

// export const searchProductsAction = payload => ({type: SEARCH_PRODUCTS,payload});

// const initialState = {
//   searchResults: [], // Инициализируем пустым массивом, чтобы хранить результаты поиска
// };

// export const searchReducer = (state = initialState, action) => {
//   if (action.type === SEARCH_PRODUCTS) {
//        return ...state,
//         searchResults: action.payload, // Записываем результаты поиска в состояние
//       };
    
//       return state;
//   }
// };


// const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
// const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
// const FETCH_ALL_ERROR = 'FETCH_ALL_ERROR'
// const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'


// export const fetchProductsAction = payload => ({ type: FETCH_PRODUCTS, payload })
// export const searchProductsAction = payload => ({ type: SEARCH_PRODUCT, payload })
// export const fetchAllErrorAction = payload => ({ type: FETCH_ALL_ERROR, payload })
// export const loadAllProductsAction = payload => ({ type: LOAD_ALL_PRODUCTS, payload })

// export const searchProductReducer = (state = initialState, action) => {
//     console.log("Тип действия:", action.type);
//     console.log("Нагрузка действия:", action.payload);
  
//     if (action.type === FETCH_PRODUCTS) {
//       // Выведите результаты обновления состояния
//       console.log("Обновленное состояние (FETCH_PRODUCTS):", {
//         list: action.payload.map(item => ({ ...item, show: true })),
//         status: 'ready'
//       });
  
//       return {
//         list: action.payload.map(item => ({ ...item, show: true })),
//         status: 'ready'
//       }
//     } else if (action.type === FETCH_ALL_ERROR) {
//       // Выведите результаты обновления состояния
//       console.log("Обновленное состояние (FETCH_ALL_ERROR):", {
//         status: 'error'
//       });
  
//       return {
//         status: 'error'
//       }
//     } else if (action.type === SEARCH_PRODUCT) {
//       const lowerCasePayload = action.payload.toLowerCase();
      
//       // Выведите результаты обновления состояния
//       console.log("Обновленное состояние (SEARCH_PRODUCT):", {
//         ...state,
//         list: state.list.map(item => ({
//           ...item,
//           show: item.title.toLowerCase().startsWith(lowerCasePayload)
//         })),
//         status: 'ready'
//       });
  
//       return {
//         ...state,
//         list: state.list.map(item => ({
//           ...item,
//           show: item.title.toLowerCase().startsWith(lowerCasePayload)
//         })),
//         status: 'ready'
//       }
//     }
  
//     return state;
//   }