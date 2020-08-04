const elements = document.querySelectorAll('li')

let times=[];
elements.forEach(x=>times.push(x.dataset["time"].split(":")))

const seconds = times.reduce((a,b) => a + (+(b[1]) + +(b[0]*60)),0)

console.log('hours: '+ ~~(seconds/3600));
console.log('minuetes: '+ ~~((seconds%3600)/60)        );
console.log('seconds: '+  ~~((seconds%3600)%60)   )
