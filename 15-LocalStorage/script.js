const addItems = document.querySelector('.add-items')
let plates = document.querySelector('.plates')
let items = JSON.parse(localStorage.getItem('items') ) || []

addItems.addEventListener('submit',addItem)
populateList(items,plates)

function addItem(event){
    event.preventDefault()
    let item = {
        text: (this.querySelector('[name="item"')).value,
        done: false
    }
    items.push(item)
    this.reset()
    localStorage.setItem('items',JSON.stringify(items))
    populateList(items,plates)
}


function populateList(plates = [], list){
    list.innerHTML = plates.map((item, i)=>{
        return   `
        <li>
        <input type="checkbox" data-item=${i} id="item${i}" ${item.done ? 'checked' : ''}>
            <label for="item${i}">${item.text}</label>
        </li>
    
        `
    }).join('')
    
  
}

plates.addEventListener('click',toggleDown)

function toggleDown(e){
    if(!e.target.matches('input')) return;
    const index = e.target.dataset.item
    const el = e.target
    items[index].done = !items[index].done

    localStorage.setItem('items',JSON.stringify(items))
    populateList(items,plates)

}


let del = document.querySelector('#clear')
del.addEventListener('click',deleteBar)

function deleteBar(){
    items = []
    localStorage.setItem(items,"")
    populateList(items,plates)
}

let sel = document.querySelector('#selectAll')
sel.addEventListener('click',selectAll)

function selectAll(){
    items.map(element => {
        element.done = true
    });
    localStorage.setItem('items',JSON.stringify(items))
    populateList(items,plates)
}