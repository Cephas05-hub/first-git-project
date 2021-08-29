let nav = document.querySelector('.nav-lnks')
let cost = document.querySelector('.close')
let menu = document.querySelector('.menu')

menu.onclick = function(){
    nav.style.top = '0'
}
cost.onclick = function(){
    nav.style.top = '-220px'
}