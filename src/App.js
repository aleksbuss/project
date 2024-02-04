import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCategoriesPage from './pages/AllCategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from './requests/categories';
import { getAllProducts } from './requests/products';
import SingleProductPage from './pages/SingleProductPage';
import AllSalesPage from './pages/AllSalesPage';

import Error from './components/Error';
import ProductsByTheCategoryPage from './pages/ProductsByCategoriesPage';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch(getAllCategories)
    dispatch(getAllProducts)
  }
,
    [dispatch]);
  
  
  return (
    <div >
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/categories' element={<AllCategoriesPage />} />
        <Route path='/categories/:category' element={<ProductsByTheCategoryPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/sales' element={<AllSalesPage/>}/>
        <Route path='*' element={<Error />} />
         
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
