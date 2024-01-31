// const objectA = 
// {a: 10,
// b: true};

// const copyOfA = objectA;
// copyOfA.a = 20;


// copyOfA.c = 'abc';
// copyOfA.f = 'zavod';

// console.log(objectA);
// Огоглошення функції стрілковим методомом
// const a = () => {
//     console.log('Hello world');
// }
// a()
// a = 10;
// a()

// const s =() => {

// }
// const myCity = {
//     city: 'Amsterdam',
//     popular: true,
//     country: 'Holland'
// }

// myCity.driver = 'Alcoholic'
// // console.log(myCity)

// myCity.zeeker = 'dorogovato';
// console.log(myCity);

// delete myCity.popular;
// console.log(myCity)


// const myCity ={
//     city: 'New York',
//     cityGreeting () {
//         console.log('Greetingggs!');
//     }
// }

// myCity.cityGreeting()
// -------------------------------------
const a = 10;
let b = a;
console.log(b);
b = 30;
console.log(a);
console.log(b);
// -------------------
const person = {
    usName: 'Bob',
    usAge: 21
}
const person2 = Object.assign({}, person);
person2.usAge = 32
console.log(person2);



// person.age = 25;
// person.isAduld = true;

// const person2 = person;
// person2.age = 32;


// console.log(person.age);