// Los arrays son elementos que tiene multiplos datos
let frutas = [ 'manzana','pera','uva']

// Agregar elementos a un array
frutas.push('kiwi')
console.log(frutas)

// Agregando un elemento al incio del array
frutas.unshift('Platano')
console.log(frutas)

// Eliminando ultimo elemento del array
frutas.pop()
console.log(frutas)

//Eliminando el primer elemento del array
frutas.shift()
console.log(frutas)

//saber su ubicacion del elemento
let index = frutas.indexOf('pera')
console.log(index)

// Tipos de variables y como se convierten a otros tipos de valores 
let palabra = '2'
let numero=1
let palabra2 = Number(palabra)
console.log(typeof palabra2)
console.log(typeof numero)

// Funciones
function saludo1 (nombre){
    console.log('Hola' + nombre)
}
saludo1('Juan Carlos')

let saludo3 = function(nombre){
    console.log('Hola, buena tarde '+nombre)
}
saludo3('Tatiana')

const saludo2 =(nombre)=>{
    console.log('Hola, buen dia '+nombre)
}
saludo2('Alex')

//Objetos -> tienen propiedades y caracteristicas.
let automovil={
    marca:'Ford',
    anio:2000,
    color:'Azul',
    descripcion:function (){
        console.log(`la descripcion del automovil es ${this.marca}`)
    }
}
console.log(automovil.marca)
console.log(automovil.descripcion())


// Crear objetos 
function automovil2(marca,anio,color){
    this.marca=marca
    this.anio=anio
    this.color=color
}
let auto1 = new automovil2('Ford',2000,'Rojo')
console.log(auto1)

//Recorrer arrays
let frutas = [ 'manzana','pera','uva','platanos','granadilla','mandarina']

for(let i=0; i<frutas.length;i++){
    console.log(frutas[i])
}

for (fruta of frutas){
    console.log(fruta)
}

//Objetos dentro de un array
let instrumentos=[
    {item:'celular',costo:2000},
    {item:'Televisor',costo:1800},
    {item:'laptop',costo:3500},
    {item:'computadora',costo:3000},
    {item:'mouse',costo:120},
    {item:'impresora',costo:1000}
]
//Metodos 
//Filtrer crea otro array con la condicion o el filtro que le demos

let met1 = instrumentos.filter((instrumento)=>{
    return instrumento.costo<=500
})
console.log(met1)

// map nos va imprimoir elementos en otro array
let met2 = instrumentos.map((instrumento)=>{
    return instrumento.item
})
console.log(met2)


// find -> Buscar elemento
let met3=instrumentos.find((instrumento)=>{
    return instrumento.item ==='Televisor'
}) 
console.log(met3)

// para recorrer elementos ForEach
instrumentos.forEach((instrumento)=>{
    console.log(`los items son ${instrumento.item} \t ${instrumento.costo}`) 
})

// Some -> nos determina un valor true y false si se cumple la ejecucion
let met4 = instrumentos.some((instrumento)=>{
    return instrumento.costo <=700
})
console.log(met4)