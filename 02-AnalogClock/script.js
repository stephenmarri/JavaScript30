let hands = document.getElementsByClassName('hand');
let secondHand = hands[0];
let minuteHand = hands[1];
let hourHand = hands[2];

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    if(seconds==0){
        secondHand.style.transitionDuration = '0s';   
        minuteHand.style.transitionDuration = '0s';   
        hourHand.style.transitionDuration = '0s';   
       } else {
        secondHand.style.transitionDuration = '0.05s';
        minuteHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
       }
    const secondDegrees = ((seconds / 60) *360) + 90;
    const minuteDegrees = ((minutes / 60) *360) + 90;
    const hourDegrees = ((hours / 12) *360) + 90;
    secondHand.style.setProperty('transform',` rotate(${secondDegrees}deg)`);
    minuteHand.style.setProperty('transform',` rotate(${minuteDegrees}deg)`);
    hourHand.style.setProperty('transform',` rotate(${hourDegrees}deg)`);
}


setInterval(setDate,1000);