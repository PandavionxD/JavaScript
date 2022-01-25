// Flat sirve para aplanar un array dependiendo del nivel que deseas
const matriz = [
    [1,2,3],
    [4,5,[1,2,[1,2]]],
    [7,8,9]
]
let res01 = matriz.flat()
let res02 = matriz.flat(2)
let res03 = matriz.flat(3)

console.log(res01)
console.log(res02)
console.log(res03)
