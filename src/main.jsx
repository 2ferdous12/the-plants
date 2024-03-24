import React from 'react'
import ReactDOM from 'react-dom/client'
import Mercury from './mercury/mercury';
import Mer from './mercury/mer';
import Venus from './venus/venus';
import Earth from './earth/earth';
import Mars from './mars/mars';
import Jupiter from './jupiter/jupiter';
import Saturn from './saturn/saturn';
import Uranus from './uranus/uranus';
import Neptune from './neptune/neptune';
import Scoundmercury from './mercury/scoundmercury';
import Thirdmercury from './mercury/thirdmercury';
import Mercurytwo from './mercury/mercurytwo';
import Scoundvenus from './venus/scounvenus';
import Thirdvenus from './venus/thirdvenus';
import Scoundearth from './earth/scoundearth';
import Thirdearth from './earth/thirdearth';
import Scoundmars from './mars/scoundmars';
import Thirdmars from './mars/thirdmars';
import Scoundjupiter from './jupiter/scoundjupiter';
import Thirdjupiter from './jupiter/thirdjupiter';
import Scoundsaturn from './saturn/scoundsaturn';
import Thirdsaturn from './saturn/thirdsaturn';
import Scounduranus from './uranus/scounduranus';
import Thirduranus from './uranus/thirduranus';
import Scoundneptune from './neptune/scoundneptune';
import Thirdneptune from './neptune/thirdneptune';
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
      },
      
      {
        index: true,
        element: <Mer></Mer>
      },
      {
        path: "/scoundmercury",
        element: <Scoundmercury></Scoundmercury>
      },
      {
        path: "/thirdmercury",
        element: <Thirdmercury></Thirdmercury>
      },
      {
        path: "/mercurytwo",
        element: <Mercurytwo></Mercurytwo>
      },

      {
        path: "/venus",
        element: <Venus></Venus>
      },
      {
        path: "/scoundvenus",
        element: <Scoundvenus></Scoundvenus>
      },
      {
        path: "/thirdvenus",
        element: <Thirdvenus></Thirdvenus>
      },
      {
        path: "/earth",
        element: <Earth></Earth>
      },
      {
        path: "/scoundearth",
        element: <Scoundearth></Scoundearth>
      },
      {
        path: "/Thirdearth",
        element: <Thirdearth></Thirdearth>
      },
      {
        path: "/mars",
        element: <Mars></Mars>
      },
      {
        path: "/scoundmars",
        element: <Scoundmars></Scoundmars>
      },
      {
        path: "/thirdmars",
        element: <Thirdmars></Thirdmars>
      },
      {
        path: "/jupiter",
        element: <Jupiter></Jupiter>
      },
      {
        path: "/scoundjupiter",
        element: <Scoundjupiter></Scoundjupiter>
      },
      {
        path: "/thirdjupiter",
        element: <Thirdjupiter></Thirdjupiter>
      },
      {
        path: "/saturn",
        element: <Saturn></Saturn>
      },
      {
        path: "/scoundsaturn",
        element: <Scoundsaturn></Scoundsaturn>
      },
      {
        path: "/thirdsaturn",
        element: <Thirdsaturn></Thirdsaturn>
      },
     
      {
        path: "/uranus",
        element: <Uranus></Uranus>
      },
      {
        path: "/scounduranus",
        element: <Scounduranus></Scounduranus>
      },
      {
        path: "/thirduranus",
        element: <Thirduranus></Thirduranus>
      },
      {
        path: "/neptune",
        element: <Neptune></Neptune>
      },
      {
        path: "/scoundneptune",
        element: <Scoundneptune></Scoundneptune>
      },
      {
        path: "/thirdneptune",
        element: <Thirdneptune></Thirdneptune>
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
