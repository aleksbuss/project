import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { categoriesReducer } from "./reducers/categoriesReducer";
import { cartReducer } from "./reducers/cartReducer";
import { productsReducer } from "./reducers/allProductsReducer";
//  import { searchReducer } from "./reducers/searchReducer";






const rootReducer = combineReducers({

    categories: categoriesReducer,
    allProducts: productsReducer,
    cart: cartReducer,
    // search: searchReducer
 
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk));