import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Usres/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root  ,
    children:[
      {
        index:true, Component: Home,
      },

      {
        path:'mobiles', Component:Mobiles,
      },
      {
        path:'laptops',Component: Laptops
      },
      {
        path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
      {
        path:'users/:usedId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.usedId}`),
        Component:UserDetails,
      },
      {
        path:'posts',
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        Component:Posts,
      },
      {
        path:`posts/:postId`,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetail,
      },
      {
        path:'*',
        element:<h3>404 : Not Found</h3>
      }
    ]
  },




  {
    path: "/about",
    element: <div>About Me</div>,
  },
  {
    path: "/blogs",
    element: <div>All My Blogs</div>,

  },
  {
    path:'/app',
    element:<App></App>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    </StrictMode>,
)
