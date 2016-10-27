// Bindings

function myFunc() {
  let x = 10; // X is defined with Let
  if (true) {
    let x = 50; 
    console.log(x); 
  }
  console.log(x);
}

myFunc();


//Const
const EXMAPLE = 1;

//EXAMPLE = 2    would throw and error