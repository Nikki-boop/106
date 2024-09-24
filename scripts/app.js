
function Hello(){
console.log("hello there!");
}

let global = 0;


function init(){
    Hello();
    let temp = 1;
    global = temp;
    console.log("hello");
}

//variable scope
let i = 0;

for(let i = 0; i < 10; i++){
    //empty variable
}


window.onload = init;