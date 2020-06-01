var inputs = document.querySelectorAll('input');
inputs.forEach(element => {
    element.addEventListener('change', handleChange);
    element.addEventListener('mouseover', handleChange);
});

function handleChange(){
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}