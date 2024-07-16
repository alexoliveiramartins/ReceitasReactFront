import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginMain } from './components/LoginMain.jsx';
import NoPage from './components/NoPage.jsx';
import { ReceitasMain } from './components/Receitas/ReceitasMain.jsx';
import { Inicio } from './components/MainPage/Inicio.jsx';
import ReceitasPage from './components/Receitas/ReceitasPage.jsx';
import { ReceitasResult } from './components/Receitas/ReceitasResult.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/receitas",
        element: <ReceitasMain />
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
        path: "/receitas/:nome",
        element: <ReceitasPage></ReceitasPage>
      },
      {
        path: "/receitas/search",
        element: <ReceitasResult></ReceitasResult>
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
