// ? Unknown is a type in TS
let userInput: unknown;
// let userInput: any;
let userName: string;

// ? It will not get any errors
userInput = 5;
userInput = 'Elin';

// ? Unless it declears to a variable that has a type
// ? But if we specify userInput to the type "any" it will work beacuse it not strict as "unknown"
// userName = userInput;

// ? If a string is wanted like in this case with userName we can do like this
if(typeof userInput === 'string'){
  userName = userInput
}
