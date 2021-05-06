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
// ? A function is not allowed to return the type "undefined"
// * Void is the standard that you should use. 
// ! Undefined is not preferable but in some cases you want to return "undefined"

printResult(add(5,12))
