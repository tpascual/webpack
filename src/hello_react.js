import style from './style.css'
import sass from './scss/main.scss'
import logo from './img/react-logo.svg'
import data from './data.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWord } from './components/App.jsx'

ReactDOM.render( 
    <HelloWord name = "React" logo = {logo} menu = {data.links} />,
    document.getElementById('app')
)