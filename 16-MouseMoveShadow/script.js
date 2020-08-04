const hero = document.querySelector('#hero')
const text = document.querySelector('h1')
let walk = 500;

document.addEventListener('mousemove', shadow)

function shadow(e){
    let x = e.clientX
    let y = e.clientY
    let heroX = text.offsetLeft + text.clientWidth/2
    let walkX = Math.round(x/(window.innerWidth/walk)) - (walk/2)
    let heroY = text.offsetTop + text.clientHeight/2
    let walkY = Math.round(y/(window.innerHeight/walk)) - (walk/2)

    text.style.textShadow = `
    ${walkX}px ${walkY}px 0 rgba(85, 230, 193,1.0),
    ${walkX}px ${walkY* -1}px 0 rgba(241, 196, 15,1.0),
    ${walkX* -1}px ${walkY}px 0 rgba(192, 57, 43,1.0),
    ${walkX* -1}px ${walkY* -1}px 0 rgba(39, 174, 96,1.0)
    `
    console.count(x,y);
}