import "./Theme/scss/global.scss"

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store'

import { AppTheme } from './Theme'
import { App } from './App'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={null}>
        <AppTheme>
          <App />
        </AppTheme>
      </Suspense>
    </BrowserRouter>
  </Provider>
)
