// New.target

function myFunc(){
    if(!new.target) throw "myFunc() must be called with new";
    console.log("Hello");
}

new myFunc();