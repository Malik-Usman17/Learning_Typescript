function addTwo(num: number){
  // num.toUpperCase() //it gives error if we specifically define type
  return num + 2
}

addTwo(20)
// addTwo("20")  //it gives error if we specifically define type

export {}