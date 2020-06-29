let player = document.querySelector('.player')
let video = player.querySelector('video')
let playButton = player.querySelector('.toggle')
let skipButtons = player.querySelectorAll('[data-skip')
let ranges = player.querySelectorAll('input[type="range"]')
let progressBar = player.querySelector('.progress__filled')
let progress = player.querySelector('.progress')

//#################################### functions
function togglePlay(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function updatePlayButton(){
    if(video.paused){
        playButton.textContent='▶'
    }else{
        playButton.textContent='❚ ❚'
    }
}

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip)
}

function handleRanges(){
    video[this.name]=this.value
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

//################################## add event listeners

video.addEventListener('click',togglePlay)
video.addEventListener('play',updatePlayButton)
video.addEventListener('pause',updatePlayButton)
video.addEventListener('timeupdate',handleProgress)



playButton.addEventListener('click',togglePlay,true)
skipButtons.forEach((element) => {
    element.addEventListener('click',skip)
});

ranges.forEach(x => x.addEventListener('change',handleRanges))
ranges.forEach(x => x.addEventListener('mousemove',handleRanges))

let isMouseDown=false
progress.addEventListener('click',(e)=>scrub(e))
progress.addEventListener('mousemove',(e)=>{
    if(isMouseDown){
        scrub(e)
    }
})
progress.addEventListener('mousedown',()=>isMouseDown=true)
document.addEventListener('mouseup',()=>isMouseDown=false)


