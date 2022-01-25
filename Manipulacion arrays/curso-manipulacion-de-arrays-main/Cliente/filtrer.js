// Aqui utilizaremos la funcion filtrer

const words =['spray','limit','limit','exuberant']
// haciendo lo mismo con ciclo for

const array01 = []
for (let index = 0; index < words.length; index++) {
    let item = words[index];
    if(item.length>=6){
        array01.push(item)
    }
}
console.log('nuevo array',array01)
console.log('original',words)


// haciendo lo mismo con el metodo filtrer
const array02 = words.filter(item=>{
    return item.length>=6
})
console.log('nuevo array -> filtrer',array02)
console.log('original',words)


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

const array03 = orders.filter((items)=>{
    return items.listo==true && items.price>=100
})
console.log(array03)
console.log(orders)