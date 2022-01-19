// Metodo map
// Permite recorrer un array y modificarlo en un nuevo array
const  numeros= [1,2,3,4,5,6,7,8,9,10]
const num1= numeros.map((numero)=>{
    return numero*10
})

console.log(num1)

// filter
const num2 = numeros.filter((numero)=>{
    return numero>5
})
console.log(num2)

//Foreach
const frutas = ['pera','manzana','Platano','Uvas','Mandarina']
const num3 = frutas.forEach((item,index)=>{
    console.log(`la fruta ${index} es ${item}`)
})

//FIND -> RECORRE ELARRAY Y TE BRINDA LA PRIMERA COINCIDENCIA
const num4 = numeros.find((numero)=>{
    return numero ==4
})
console.log(num4)

// SORT ordena el array
const num5 =numeros.sort((numero)=>{
    return numero
})
console.log(num5)

// some retorna un true dependiendo de la condicion determinada
const num6 = numeros.some((numero)=>{
    return numero<10
})
console.log(num6)

// Every retorna true pero siempre y cuando se cumpla la condicion en todos
const num7 =numeros.some((numero)=>{
    return numero>10
})
console.log(num7)

//CONCAT  se utiliza para concatenar uno o varios arrays existentes
const les1 = [1,2,3]
const les2 = [4,5,6]
const les3 = [7,8,9]
const num8 = les1.concat(les2,les3)
console.log(num8)

// include -> retorna un booleano 
const num9 = numeros.includes(11)
console.log(num9)

// Join -> une elementos de un array a texto (string)
const letras = ['a','l','e','x',' ','d','a','n','i','e','l']
console.log(letras.join(''))
console.log(letras.join('-'))

// reduce -> acumular los valores a un acumulador para reducirlo a un unico valor
const num10 = numeros.reduce((numero,total=0)=>{
    total += numero
    return total
})
console.log(num10)

//Indexof retorna el indice de un elementos si no esta dentro retorna -1
console.log(numeros.indexOf(5))

// findIndex -> retorna el primer elemento si no retorna -1
const nombres = ['alex','daniel','karla','taty']
const num11 =nombres.findIndex((nombre)=>{
    return nombre ==='taty'
})
console.log(num11)

// fill -> cambiar los valores de un array por un valor estatico
console.log(numeros.fill(20,3,6))

// push -> agregar elementos dentro de un array
const num12 = numeros.push(20,21,22,23)
console.log(numeros)

//pop -> elimina el ultimo elemento de un array
const num13 =numeros.pop()
console.log(numeros)

// shift -> elimina el primer elemento de un array
const num14 =numeros.shift()
console.log(numeros)

// unshift -> agrega un elemento al inicio del array
const num15 =numeros.unshift('one')
console.log(numeros)

// slice -> devuelve un array mas pequeño
const num16 = numeros.slice(2,6)
console.log(num16)

// reverse -> invierte el orden de los de un array
const num17 =numeros.reverse()
console.log(num17)

// splice -> agrega o elimina elemento de un array
let num18 = [5,6,7]
num18.splice(1,2,'hola','mundo')
console.log(num18)

// lastindexof -> ingresa el indice de un elemento empezando por el final si no lo encuentra genera un -1
console.log(num18.lastIndexOf(5))

// flat-> crea un array con todos sus subelementos
let res1 = [1,2,3,[1,2],[5,6,7],9]
let res2 = res1.flat()
console.log(res2)
