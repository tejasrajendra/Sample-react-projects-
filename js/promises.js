
console.log('it stated from here ')
let p = new Promise((resolve , reject)=>{
    let a = 1 +1 ;
    if(a == 2)
        resolve('sucess')
    else 
        reject('failed')
})


// p.then((m)=>{
//     console.log('This is the success '+m)
// }).catch((m)=>{
//     console.log('this is a failure'+m)
// }) 

p.then(
    function(value) { console.log('this is a success ' + value)},
    function(erroe) { console.log('this is a failure ' + erroe)}
)

const dothis = true;
const dothat = false; 
function watchPromises(){
    return new Promise((callback,errorcallback) => {
        if(dothis)
        {
            callback('cool do this was called ')
        }

        if(dothat){
            errorcallback('this wasnt supposed to be called ')
        }
    })
}

watchPromises().then((m)=>{
    console.log('this was called '+ m)
}).catch((m) => {
    console.log('this wasnt supposed to be called '+ m)
})


