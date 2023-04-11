import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/Applied/Applied';
import Blog from './components/Blog/Blog';
import Details from './components/Details/Details';
import appliedJobLoader from './Loader/appliedJobLoader';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/featuredjob.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <Applied></Applied>,
        loader: appliedJobLoader
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'details/:detailsId',
        element: <Details></Details>,
        loader: ({params}) => fetch(`/featuredjob.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
