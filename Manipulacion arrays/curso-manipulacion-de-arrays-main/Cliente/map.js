let orders = [
    {
        name:'Lucia',
        price:120,
        listo:true
    },
    {
        name:'Karol',
        price:122,
        listo:false
    },
    {
        name:'Oscar',
        price:222,
        listo:true
    },
    {
        name:'daniel',
        price:110,
        listo:false
    }
]
const res01 = orders.map(item=>{
    return item.price
}) 
console.log(res01)

// AL USAR MAP NO SE INMUTA EL PRIMER ARRAY SALVO SEA VALORES DE OBJETOS
// HAY QUE TENER CUIDADO
// Por ejemplo al añadir objetos a mi array


// const res02  = orders.map(item=>{
    // item.imp = .16
    // return item
// })
// console.log(orders)
// console.log(res02)


// al utilizar objetos dentro de un array hay que tener mucho cuidado
const res03 = orders.map(item=>{
    return {
        ...item,
        imp:.16
    }
}) 
console.log('Orders',orders)
console.log('res03',res03)