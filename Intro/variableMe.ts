let greetings: string = "Hello World";

let num = 6

//number
let userId: number = 1234
let userId2: number = 100.20

let myId = 10003 //you don't need to infer the type, typescript automatically detect it when you first assign it the number

//boolean
let isLogin: boolean = false

greetings.toLowerCase()

console.log(greetings);


//any
let hero
// let hero: number

function getHero(){
  //both return statements are correct
  //return 200
  return "hello"
}

hero = getHero()

export {}