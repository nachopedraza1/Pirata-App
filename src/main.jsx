import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { AppTheme } from './Theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  /*  <React.StrictMode> */
  <BrowserRouter>
    <AppTheme>
      <App />
    </AppTheme>
  </BrowserRouter>
  /* </React.StrictMode> */
)
