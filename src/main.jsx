import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { Root } from './root/index.jsx'
import { Hooks } from './darslar/9/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root/>
    <Hooks/>
  </React.StrictMode>,
)
