


const element = document.getElementsByClassName('grid__body')[0].childElementCount
const count = document.getElementsByClassName('count')[0]
const time = document.getElementsByClassName('time')[0]

let today = new Date();
let day = today.getDate() < 10 ? '0'+today.getDate() : ''+today.getDate()
let month = (today.getMonth() + 1) < 10 ? '0'+(today.getMonth() + 1) : ''+(today.getMonth() + 1)
let year = today.getFullYear()
let hour = today.getHours()
let minutes = today.getMinutes()

count.textContent = 'Images: ' + element;
time.textContent = 'Date: '+ day + '.' + month + '.' + year + ' ' + hour + ':' + minutes

// function Modal(id) {
//     const element = document.getElementById(id)
    
// }