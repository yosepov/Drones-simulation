import React from 'react'
import ReactDom from 'react-dom'
import { Leva } from 'leva'
import App from './App'
import './App.css'


ReactDom.render(
  <>
    <App />
    {/* <Leva collapsed /> */}
  </>,
  document.querySelector('#root'),
)
