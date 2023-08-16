"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() //it gives error if we specifically define type
    return num + 2;
}
addTwo(20);
// addTwo("20")  //it gives error if we specifically define type
//in functions definig data type is necessary
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("MALIK");
function sinUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
sinUpUser("malik", "malik@mail.com", false);
loginUser("usman", "m.mcom");
function addingNumbers(num) {
    return "hello";
}
addingNumbers(10);
//there is no in addingNumbers function creation and calling, but i also want to restrict
//the type on returning just like the passing an argument
function addNum(n) {
    return n + 1;
}
addNum(100);
var getHello = function (s) {
    return "hello";
};
var heros = ["messi", "kroos", "ronaldo"];
// const heros = [1, 2, 3]
heros.map(function (val) {
    // return 200
    return "Favorite footballer is ".concat(val);
});
function consoleErrors(err) {
    console.log(err);
}
var handleErrors = function (err) {
    throw new Error(err);
};
