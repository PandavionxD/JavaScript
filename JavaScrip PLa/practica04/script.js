// Creacion del array
let sueldos = []
sueldos.push(
    {
        nombre: 'Juan',
        sueldo: 3200
    },
    {
        nombre: 'alex',
        sueldo: 2100
    }, {
    nombre: 'daniel',
    sueldo: 3100
}, {
    nombre: 'milagros',
    sueldo: 15000
}, {
    nombre: 'tatiana',
    sueldo: 4000
}, {
    nombre: 'Alejandro',
    sueldo: 3300
},
{
    nombre:'estrella',
    sueldo:2700
}
)
console.log(sueldos)

// Separar los elementos en otro array
let sueldosA = sueldos.map((sueldo)=>{
    return sueldo.sueldo
})


// Ordenar por sueldo de menor a mayor

let ordenarSueldos = sueldosA.sort((a,b)=>{
    return a-b
})
// Verificamos si el array es par o impar
function esPar(num){
    return num.length%2 ===0
}
// tomar valores de la mitad del array
let mitad = parseInt(sueldos.length/2)

// Funcion para calcular el promedio
function calculoPromedio (lista){
    let total =lista.reduce((total1=0,b)=>{
        total1 +=b
        return total1
    })
    return total/lista.length
}

// hacemos las funciones para crear la mediana
 function mediana(num){
    if(esPar(num)){
        let mitad1 =num[mitad-1]
        let mitad2 =num[mitad]
        let res = calculoPromedio([mitad1,mitad2])
        return res       
    }else{
        return num[mitad] 
    }
}

//aqui vamos a ver a quien pertence del array con objetos de arriba
let b =sueldos.filter((item)=>{
    let a =mediana(ordenarSueldos)
    return item.sueldo ===a
})
let c = b.map((item)=>{
    return `el sueldo mediano lo tiene ${item.nombre} y su sueldo es ${item.sueldo}`
})
console.log(c)