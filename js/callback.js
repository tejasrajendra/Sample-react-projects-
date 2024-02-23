function mydisplayer(sum ){
    document.getElementById("display").innerHTML= sum
}


function myCalculator(n1 , n2 , myCallback ){
let sum = n1 + n2;
myCallback(sum)
}


myCalculator(3,4,mydisplayer)


function myFunction(value){
    document.getElementById('display').innerHTML = value
}


setTimeout(()=>{
    myFunction('i love you')
}, 3000)