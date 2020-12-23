
import React from 'react'

import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp'

import 'normalize.css/normalize.css'



import './styles/styles.scss'


IndecisionApp.defaultProps={
    options : ["write something"]
}


ReactDOM.render(<IndecisionApp />,document.getElementById('approot'))