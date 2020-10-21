import style from './style.css'
import sass from './scss/main.scss'
import logo from './img/webpack-logo.svg'
import data from './data.json'
import { suma } from './suma'
const mundos = 'Mart'
console.log('hola mundo ${mundos}')
console.log(suma(10, 23))

const d = document,
    app = d.getElementById('app'),
    h1 = d.createElement('h1'),
    img = d.createElement('img'),
    p = d.createElement('p'),
    nav = d.createElement('nav')

let menu = ''

data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`)

h1.textContent = 'Webpack :)'
p.textContent = "First webpack application"
img.src = logo
nav.classList.add('Menu')
nav.innerHTML = menu

app.appendChild(h1)
app.appendChild(p)
app.appendChild(nav)
app.appendChild(img)

console.log(data)