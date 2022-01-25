// Every es un metodo que evalua que todos los elementos sean ciertos si no retorna false
let numeros = [1,2,12,34,12,35,11,39]

const num1 =  numeros.every(item=>{
    return item<=40
})
console.log('hay resultados mayores de 40: ',num1)

// Ejercicio, solo ingresra el equipo si todos son menores de 15 años.

let personas01=[
    {
        name:'alex',
        age:12
    },
    {
        name:'daniel',
        age:14
    },
    {
        name:'tatiana',
        age:14
    },
    {
        name:'mily',
        age:14
    },
    {
        name:'alejandro',
        age:11
    },
    {
        name:'taty',
        age:10
    }
]
const person = personas01.every(item=>{
    return item.age <15
})
function ingresar (valor){
    if(valor){
        console.log('El equipo puede ingresar sin ningun problema')
    }else{
        console.log('El equipo no puede ingresar, error de inscripcion.')
    }
}

// llamamos la funcion creada para ver si funciona
ingresar(person)