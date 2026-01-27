import React, { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ShopContextProvider } from './context/ShopContext.jsx'
import ReactDom from 'react-dom/client';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
    
  </BrowserRouter>,
)
