import React from 'react'
import ReactDOM from 'react-dom/client'
import SwitchContextProvider from './context/SwitchContext.tsx'
import DataContextProvider from './context/DataContext.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SwitchContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </SwitchContextProvider>
  </React.StrictMode>,
)
