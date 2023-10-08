const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const INCR = 'INCR'
const DECR = 'DECR'
const CLEARALL = 'CLEARALL'

export const addTOCartAction = payload => ({ type: ADD_TO_CART, payload });
export const removeAction = payload => ({ type: REMOVE_PRODUCT, payload });
export const incrAction = payload => ({ type: INCR, payload });
export const decrAction = payload => ({ type: DECR, payload });
export const clearAllAction = payload => ({ type: CLEARALL, payload });

// Если продукта нет в корзине, то мы берем action.payload, добавляем к нему count: 1 и измененный объект добавляем в состояние

// Если продукт есть в корзине, то мы обращаемся к свойству count этого продукта и увеличиваем значение на 1


const checkProduct = (state, payload) => {
    const productInCart = state.find(el => el.id === payload.id);
    if (!productInCart) { // !productInCart (false) --- productInCart === undefined
        return [...state, { ...payload, count: 1 }]
        
    } else {
        productInCart.count++
        return [...state]
    }
}

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartReducer = (state = initialState , action) => {
    if (action.type === ADD_TO_CART) {
        return  checkProduct (state, action.payload)
    } else if (action.type === REMOVE_PRODUCT){
        return state.filter(el => el.id !== action.payload) // ne nuzno vozrascjatj novij mossiv potomu ctofilter sozdaet ewgo
        
    } else if (action.type === INCR) {
        const target = state.find(({ id }) => id === action.payload)
        target.count++;
        return [...state];

    }else if (action.type === DECR) {
        const target = state.find(({ id }) => id === action.payload)
        target.count--;
        if (target.count === 0) {
            return state.filter(({ id }) => id !== action.payload)
             // return state.filter(el => el.id === action.payload).count--
        } 
        return [...state];

    } else if (action.type === CLEARALL){
        return []

    } else {

    return state
    }
       
}