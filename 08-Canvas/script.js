const canvas = document.querySelector('#myCanvas')
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let isDrawing = false
let lineX=0;
let lineY=0;
let hue=0;
let direction = 0
let lWidth = 1
ctx.globalCompositeOperation='darken'


function draw(e){
    
    if(!isDrawing) return
    ctx.beginPath();
    ctx.strokeStyle=`hsl(${hue},50%,50%)`
    ctx.lineWidth=lWidth
    ctx.lineCap='round'
    ctx.lineJoin='round'
    ctx.moveTo(lineX,lineY)
    ctx.lineTo(e.offsetX,e.offsetY)    
    ctx.stroke()    
    ctx.closePath()

    lineX = e.offsetX
    lineY = e.offsetY
    hue++

    if(hue>360){
        hue=0
    }

    if(lWidth>100 || lWidth<1) direction=!direction

    if (direction) lWidth++;
    if (!direction) lWidth--;


}

function Erase(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


canvas.addEventListener('mousedown',(e)=> {
    isDrawing=true
    lineX = e.offsetX
    lineY = e.offsetY
} )
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseout',()=> isDrawing=false )
canvas.addEventListener('mouseup',()=> isDrawing=false )