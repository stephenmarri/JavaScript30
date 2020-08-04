const images = document.querySelectorAll('img')




window.addEventListener('scroll', debounce(handler))

function handler(){
    images.forEach(x=>{
        
        if(x.clientHeight/2 + x.y < window.innerHeight){
            x.classList.add('active')
        }else{
            x.classList.remove('active')
        }
        if(x.y + x.clientHeight/2 < 0){
            x.classList.remove('active')
        }
    })
}


function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

