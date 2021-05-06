// Functions
// ? You can set a function type to which datatype you want it to return like this.
// function add(n1: number, n2: number) : number {
//   return n1 + n2
// }
// ? But it is not preferable


function add(n1: number, n2: number) {
  return n1 + n2
}

// ? This function doesn't have a return statement which gives it the type of void
function printResult(num: number){
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2; 
  cb(result)
}

// ? A function is not allowed to return the type "undefined"
// * Void is the standard that you should use. 
// ! Undefined is not preferable but in some cases you want to return "undefined"

printResult(add(5,12))

// ? Whatever we store in 'combineValues' should be a function
// let combineValues: Function;

// * To customize the type so you get the right amount of arguments etc. we use Function Types
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8));


addAndHandle(10, 20, (result) => {
  console.log(result);
})