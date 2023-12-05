import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './MainPage.jsx'
import Root from './Root.jsx'
import Page1 from './KatselmointiSivut/Page1.jsx'
import Page2 from './KatselmointiSivut/Page2.jsx'
import Page3 from './KatselmointiSivut/Page3.jsx'
import Page4 from './KatselmointiSivut/Page4.jsx'
import GoodbyePage from './GoodbyePage.jsx'

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
      },
      {
        path:"/page_3",
        element: <Page3></Page3>
      },
      {
        path:"/page_4",
        element: <Page4></Page4>
      },
      {
        path:"/moikkamoi",
        element: <GoodbyePage></GoodbyePage>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
