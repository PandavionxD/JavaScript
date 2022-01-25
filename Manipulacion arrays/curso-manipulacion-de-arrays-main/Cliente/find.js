// aqui veremos los metodos fin y findindex
// find es casi igual a filtrer pero en caso de find solo retorna un valor y filtrer puede retornar un array nuevo

let numbers = [1,2,3,4,5,1,23,98,20,30]

// utilizamos el metodo find
let num1 = numbers.find(item=>{
    return item===30
})
console.log(num1)

// Ejercicio
const pedidos = [
    {
        name:'hamburgesa',
        id:'1',
        price:23
    },
    {
        name:'salchicha',
        id:'2',
        price:22
    },
    {
        name:'helado',
        id:'3',
        price:5
    },
    {
        name:'pizza',
        id:'4',
        price:12
    }
]
let res01 = pedidos.find(item=>{
    return item.id ===1
})
console.log('res01',res01)
let res02 = pedidos.findIndex(item=>{
    return item.price ===12
})
console.log('res02',res02)