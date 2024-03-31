import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import  Home  from './pages/home.tsx';
import RootLayout from './routes/RootLayout.tsx';
import ProductDetailPage, {loader as productsDetailLoader} from './pages/product.tsx';
import { CartProvider } from './store/cartContext.tsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage/>,
        loader:productsDetailLoader,
       
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ToastContainer/>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
