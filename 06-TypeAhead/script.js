const endPoint = 'https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json'
let cities = []
const userInput = document.querySelector('#userInput')
const suggestions = document.querySelector('#suggestions')

fetch(endPoint)
 .then(response => response.json())
 .then(data => {cities.push(...data)})

 function findMatches(word,cities){
     return cities.filter( x =>{
        
        const rgx = new RegExp(word, 'gi')
        return x.name.match(rgx) || x.state.match(rgx)
     })     
 }

 function displayMatches(){
     suggestions.style.display = 'block'
     const matchArray = findMatches(this.value,cities);    
     const html = matchArray.map(place => {
        
        const rgx = new RegExp(this.value,'gi')
        const newName = place.name.replace(rgx, match => `<span class="hl">${match}</span>`)
        const newState = place.state.replace(rgx,match => `<span class="state">${match}</span>`)
         return `
         <li>${newName}, ${newState}</li>
         `
     }).join('');
     suggestions.innerHTML=html     
 }

 function freezeNhideMatches(){     
     userInput.value=event.target.textContent
    suggestions.style.display = 'none'
 }


 userInput.addEventListener('change',displayMatches)
 userInput.addEventListener('keyup',displayMatches)
 suggestions.addEventListener('click',freezeNhideMatches)
 