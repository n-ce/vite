import './style.css'
import htmlLogo from './HTML.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const getElement = document.getElementById.bind(document)

getElement('htmlLogo').src = htmlLogo
getElement('viteLogo').src = viteLogo
setupCounter(getElement('counter'))
