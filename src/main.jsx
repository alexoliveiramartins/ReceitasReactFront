import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProductsMain } from './components/ProductsMain.jsx';
import { LoginMain } from './components/LoginMain.jsx';
import NoPage from './components/NoPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Inicio</h1>
      },
      {
        path: "/receitas",
        element: <ProductsMain />
      },
      {
        path: "/login",
        element: <LoginMain />
      },
      {
        path: "/register",
        element: <h1>Registro</h1>
      },
      {
        path: "*",
        element: <NoPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
