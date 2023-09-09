//const startButton = document.querySelector("#startButton");


/*
document.querySelector('#startButton').addEventListener('click',()=>{
    let playerElm = document.querySelector('#player')
    if(playerElm.muted ===true){
        playerElm.muted = false
    }else{
        playerElm.muted = true
    }    
}
)
*/

const timer = 3;
let amountTime = timer * 60;

function calculateTime() {
    let countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;


    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    //console.log(amountTime);

    if (amountTime < 0){
        stopTimer();
        amountTime = 0;
    }

    function stopTimer(){
        clearInterval(timerId);
    }
   
}

let timerId = setInterval(calculateTime, 1000);

