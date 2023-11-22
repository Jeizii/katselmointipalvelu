import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import Root from './Root.jsx'
import Page1 from './KatselmointiSivut/Page1.jsx'
import Page2 from './KatselmointiSivut/Page2.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/home",
        element: <MainPage></MainPage>
      },
      {
        path:"/page_1",
        element: <Page1></Page1>
      },
      {
        path:"/page_2",
        element: <Page2></Page2>
      }
    
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
