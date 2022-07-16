import "./styles/index.css"

console.log('hello main.js');
const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((total, curVal) => total + curVal, 0)


const box1 = document.createElement('div')
box1.className = 'box1'
document.body.appendChild(box1)

const box2 = document.createElement('div')
box2.className = 'box2'
document.body.appendChild(box2)

const box3 = document.createElement('div')
box3.className = 'box3'
document.body.appendChild(box3)