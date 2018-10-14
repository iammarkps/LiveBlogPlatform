import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'
import 'antd/dist/antd.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
