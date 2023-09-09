document.addEventListener('DOMContentLoaded',function(){
    let startPlayButton = document.querySelector('#startButton')
    if( startPlayButton !== null){
        startPlayButton.addEventListener('click',changePlayButton)
        //startPlayButton.addEventListener('touchstart',changePlayButton)
    }

    
   
})
changePlayButton = function(){
    console.log(`change play button state from play to pause and viceversa`)
    let startButtonElm = document.querySelector('#startButton')
    let playerElm = document.querySelector('#player')

        //set Pause button    
    if(startButtonElm.getAttribute('type') === 'play' ){
        startButtonElm.querySelector('path:last-child').setAttribute('d', 
        'M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z')
        startButtonElm.setAttribute('type', 'pause')
        playerElm.muted = false
    }else{    
        //set start button
        startButtonElm.querySelector('path:last-child').setAttribute('d', 
        "M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z")
        startButtonElm.setAttribute('type', 'play')
        playerElm.muted = true
}
}