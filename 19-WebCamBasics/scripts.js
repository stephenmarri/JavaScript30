const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

let userMedia;

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
        .then(localMediaStream => {
            userMedia = localMediaStream
            video.srcObject = localMediaStream;
            video.play()
        })
        .catch(err =>{
            console.error('Some error, duh!!! ', err)
        })
}


function stopVideo(){    
    userMedia.getTracks().forEach(function(track) {
        track.stop();
    });
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height);
    canvas.height = height;
    canvas.width = width;
    return setInterval(()=>{
        ctx.drawImage(video, 0,0,width,height);
    },16)

    
}

getVideo()
paintToCanvas()