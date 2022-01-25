// Diferencias entre un foreach y un for normal!!
// Ciclo FOR
let letras = ['a','b','c','d','e'];

for(let i=0; i<letras.length;i++){
    let a = letras[i]
    console.log('Ciclo For',a)
}

// Ciclo FOROF
for(letra of letras){
    console.log('Ciclo ForOf',letra)
}

// Ciclo FOREACH
letras.forEach(letra=>{console.log('Ciclo foreach',letra)})

