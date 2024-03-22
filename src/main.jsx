import React from 'react'
import ReactDOM from 'react-dom/client'
import Mercury from './mercury/mercury';
import Mer from './mercury/mer';

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mercury></Mercury>,
    children: [
      {
        path: "/",
        element: <Mer></Mer>
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
