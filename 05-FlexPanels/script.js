let panels = document.querySelectorAll('.panel');



counter = 1
Array.from(panels).forEach(element => {
    element.style.backgroundImage = `url('images/${dir}${counter}.jpg')`
   //element.addEventListener('mouseover',toggleOpen)
    element.addEventListener('click',toggleOpen)
    counter++;
});


function toggleOpen(){
    panels.forEach(x => x.classList.remove('open'))
    this.classList.toggle('open')
}

