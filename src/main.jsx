import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider} from 'react-router'
import { router } from './App.jsx'
import {Provider} from 'react-redux'
import Store from './SocialMediaApp/Store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={Store}>
      <RouterProvider router={router} />
    </Provider>
   
  </StrictMode>,
)
