// CLOUSERS Y SCOPE
// un ejercicio con clousers
const monedero = ()=>{
    total = 0
    const aumento =(moneda)=>{
        total += moneda
        console.log(total)
    }
    return aumento
}

const moneda = monedero()
moneda(4)
moneda(6)
moneda(10)

//  segundo clousers

const aumento = (item)=>{
    const aumento1 = ()=>{
        item++
        console.log(item)
    }
    return aumento1
}
const numero = aumento(1)
numero()
numero()
numero()
const numero2 = aumento(10)
numero2()
numero2()
numero2()


// SCOPE
let num1 = 12
console.log(`numero es ${num1}`)
num1 =20
console.log(`numero es ${num1}`)

// declarar una variable

const num3 =14
console.log(`constante es ${num3}`)
// num3 =29
// console.log(`constante es ${num3}`)
// Generalmente una const no se puede cambiar el valor se utiliza en constante

