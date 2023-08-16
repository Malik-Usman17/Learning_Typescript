function addTwo(num: number){
  // num.toUpperCase() //it gives error if we specifically define type
  return num + 2
}

addTwo(20)
// addTwo("20")  //it gives error if we specifically define type

//in functions definig data type is necessary
function getUpper(val: string) {
  return val.toUpperCase()
}

getUpper("MALIK")

function sinUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

sinUpUser("malik", "malik@mail.com", false)
loginUser("usman", "m.mcom")

function addingNumbers(num: number){
  return "hello"
}

addingNumbers(10)
//there is no in addingNumbers function creation and calling, but i also want to restrict
//the type on returning just like the passing an argument

function addNum(n: number): number{
  return n + 1
}

addNum(100)

const getHello = (s: string): string => {
  return "hello"
}

const heros = ["messi", "kroos", "ronaldo"]
// const heros = [1, 2, 3]
heros.map((val): string => {
  // return 200
  return `Favorite footballer is ${val}`
})

function consoleErrors(err: string): void{
  console.log(err)
}

const handleErrors = (err: string): never => {
  throw new Error(err)
}

export {}