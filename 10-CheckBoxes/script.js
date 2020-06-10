const form = document.querySelectorAll('input')
form.forEach(x => x.addEventListener('click',shiftKey))

let prevId=1
let currId=1

function shiftKey(e){

    prevId=currId
    currId=parseInt(e.target.dataset.id)
    
    if(e.shiftKey){
        for(let i= Math.min(prevId,currId);i<=Math.max(currId,prevId); i++){
            form[i-1].checked = true
        }   
    }
    
    
}
