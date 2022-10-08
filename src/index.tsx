import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppStateProvider } from './context/AppStateContext';
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
)

reportWebVitals()
