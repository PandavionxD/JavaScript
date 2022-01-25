// concatena dos arrays y devuelve uno sin modificar los anteriores
let num1 = [1,2,3]
let num2 = [4,5,6]
let num3 = [7,8,9]

let res = num1.concat(num2,num3)
console.log(res)

// Agregar un array dentro de otro array modificando el primero

num1.push(...num2)
console.log('num1',num1)
