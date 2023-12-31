import { loadAllProductsAction } from "../store/reducers/allProductsReducer"


export const getAllProducts = (dispatch) => {
    fetch(`http://localhost:3333/products/all`)
      .then(res => res.json())
      .then(json => dispatch(loadAllProductsAction(json)))     
}

export function getPhoneNumber(obj){
  fetch('http://localhost:3333/sale/send', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
  })
  .then(function(res){
      return res.json()
  })
  .then(function(json){
      console.log(json);
  })
}


export function getOrder(obj){
  fetch('http://localhost:3333/order/send', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
  })
  .then(function(res){
      return res.json()
  })
  .then(function(json){
      console.log(json);
  })
}



  
// export const fetchAllProducts = async (dispatch) => {

//   try {
//       const resp = await fetch('https://localhost:3333/products/all')
//       const data = await resp.json();
//       dispatch(fetchProductsAction(data))
//   } catch {
//       dispatch(fetchAllErrorAction())
//   }

// }


// export const addNewProduct = new_product => {
//   fetch('http://localhost:3333/sale/send', {
//     method: 'POST', 
//     body: JSON.stringify(new_product)
//   })
//       .then(res => res.json())
//       .then(json => console.log(json, 'new product added'))
// }






