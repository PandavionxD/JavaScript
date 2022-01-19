// AREA Y PERIMETRO DEL CUADRADO
console.group('Cuadrado')
function perimetroCuadrado(lado){
    return lado*4
}

function areaCuadrado(lado){
    return lado**2
}

function PerimetroCuadrado(){
    let variable= document.getElementById("lado").value
    let per=perimetroCuadrado(variable)
    console.log(`El perimetro del cuadrado es: ${per}`)
}

function AreaCuadrado(){
    let variable= document.getElementById("lado").value
    let per=areaCuadrado(variable)
    console.log(`El area del cuadrado es: ${per}`)
}
console.groupEnd()

// AREA Y PERIMETRO DEL CUADRADO
console.group('Rectangulo')
function perimetroRectangulo(ladoa,ladob){
    return (ladoa*2)+(ladob*2)
}   
function areaRectangulo(ladoa,ladob){
    return ladoa*ladob
}

function PerimetroRectangulo(){
    let ladoa = document.getElementById('lado1').value
    let ladob = document.getElementById('lado2').value
    let total = perimetroRectangulo(ladoa,ladob)
    console.log(`El perimetro del rectangulo es ${total}`)
}
function AreaRectangulo(){
    let ladoa = document.getElementById('lado1').value
    let ladob = document.getElementById('lado2').value
    const total = areaRectangulo(ladoa,ladob)
    console.log(`El area del rectangulo es ${total}`)
}
console.groupEnd()

// AREA Y PERIEMTRO DEL CIRCULO
console.group('Circulo')
function perimetroCirculo(radio){
    return radio*2*Math.PI
}
function areaCirculo(radio){
    return Math.PI*(radio**2)
}
function AreaCirculo(){
    let radio = document.getElementById("radio").value
    let total = areaCirculo(radio)
    console.log(`El area del circulo es ${total}`)
}
function PerimetroCirculo(){
    let radio = document.getElementById("radio").value
    let total = perimetroCirculo(radio)
    console.log(`El perimetro del circulo es ${total}`)
}




