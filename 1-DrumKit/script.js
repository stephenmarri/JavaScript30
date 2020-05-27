window.addEventListener('load',main);

function main(){
    
    function playTransition(e){
        const ele = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        if(!ele) return;
        audio.currentTime=0;
        audio.play();
        ele.classList.add('playing');  
        
    }

    function removeTransition(e){
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing')
    }
    
    const keys = document.querySelectorAll('.key')
    keys.forEach(element => {
        element.addEventListener('transitionend', removeTransition);
    });

    window.addEventListener('keydown',playTransition);



    const mobile = document.querySelector('#mobile')

    function myFunction(x) {
        if (x.matches) { // If media query matches          
          mobile.style.display="block";
          mobile.addEventListener('change',emptyValue);    
        window.addEventListener('keyup',playTransition);

        } 
      }
      
      function emptyValue(){
          mobile.value="";
      }

      var x = window.matchMedia("(max-width: 500px)")
      myFunction(x) // Call listener function at run time
      









}