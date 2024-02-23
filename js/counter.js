let counter = 0 
let intervalId 
function updateCounterDisplay(){
    document.getElementById('counterDisplay').innerText=counter;
}

function increment(){
counter++
updateCounterDisplay()
}

function decrement(){
    counter--
    updateCounterDisplay()
}

function setAutoIncrement(){
    intervalId = setInterval(
        ()=>{
            increment()
        }, 1000
    )
}

function stopAutoIncrement(){
    clearInterval()
}