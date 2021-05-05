// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// }  = {
//   name: 'Elin',
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// ? You can also declear types to the enum. Otherwise it will start at 0
// enum Role { ADMIN = 5 , READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR' };
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Elin',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}


if(person.role === Role.AUTHOR) {
  console.log('is author');
  
}