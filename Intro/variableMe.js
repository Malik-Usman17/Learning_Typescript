"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World";
var myData = "usman";
var num = 6;
//number
var userId = 1234;
var userId2 = 100.20; //it's too obvious here you don't need to assign type number
var myId = 10003; //you don't need to infer the type, typescript automatically detect it when you first assign it the number
myId.toFixed(1);
userId2.toFixed(1);
//boolean
var isLogin = false;
greetings.toLowerCase();
console.log(greetings);
//any
var hero;
// let hero: number
function getHero() {
    //both return statements are correct
    //return 200
    return "hello";
}
hero = getHero();
var myVal; //in this scenario you can mention type
function getMyVal() {
    return "false";
}
myVal = getMyVal();
