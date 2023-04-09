import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import OrderReview from './component/OrderReview';
import About from './component/About';
import Grandpa from './component/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')

      },
      {
        path: 'order',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'grandpa',
        element: <Grandpa></Grandpa>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
