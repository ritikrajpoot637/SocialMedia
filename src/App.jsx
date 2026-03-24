import {createBrowserRouter} from 'react-router'
import PostList from './SocialMediaApp/PostList'
import AddPost from './SocialMediaApp/AddPost'
import SinglePost from './SocialMediaApp/SinglePost'
import EditPost from './SocialMediaApp/EditPost'
import TimeComp from './SocialMediaApp/TimeComp'
import Registration from './Forms/Registration'
import Login from './Forms/Login'
export const router=createBrowserRouter( [
  {
    path:'/',element:<Registration/>
  },
  {
    path:'/login',element:<Login/>
  },

  {
    path:'/postList', element:<PostList/>,
   
   

  },
   { path:'/addPost',element:<AddPost/>},
  {path:'/singlepost/:id',element:<SinglePost/>},
  {path:'/editpost/:id',element:<EditPost/>},
  
   
])