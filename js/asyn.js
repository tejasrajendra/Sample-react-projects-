async function myFunction(){
    return "hello";
}

myFunction().then(
    function(value) { console.log(value+"is being printed here ")}
)