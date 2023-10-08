
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY';

export const loadProductsByCategoryAction = payload => ({ type: PRODUCTS_BY_CATEGORY, payload });

export const productsByCategoriesReducer = (state = [], action) => {
  if (action.type === PRODUCTS_BY_CATEGORY){
    return action.payload.map(el => ({...el, show_product: true, show_product_by_sale: true}))
  } else {
    return state
  }
}

// const productsByCategoryReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'RODUCTS_BY_CATEGORY':
//         return {
//           ...state,
//           data: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
 


// export const productsByCategoryReducer = (state = [], action) => {
//     console.log('Action:', action);
//     if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
//       console.log('Setting state to:', action.payload);
//       return action.payload;
//     }
//     console.log('Returning state:', state);
//     return state;
//   };