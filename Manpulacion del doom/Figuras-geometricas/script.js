// Crearemos los metodos de perimetro area de las figuras geometricas

(()=>{
    
    const perCuadrado = (lado)=>{
        return lado*4
    }
    const areaCuadrado = lado => lado**2
    
    const perTriangulo= (a,b,c)=>{
        return a+b+c
    }
    const areaTriangulo = (a,b)=> (a*b)/2
    
    const diameCirculo = (a)=> 2*a
    
    const perCirculo = (r)=>{
     return diameCirculo(r)*Math.PI
    }    
    
    const areaCirculo = (a) => Math.PI * Math.pow(a,2)
    
    // manejo del doom
    let parrafo = document.querySelector('.respuesta') 
    
    // Calculo de perimetro de Cuadrado
    const perimetroCuadrado = document.querySelector('.btn-perimetroCuadrado')
    perimetroCuadrado.addEventListener('click',()=>{
        let lado = document.querySelector('.box-main__input').value
        let res = perCuadrado(lado) 
        parrafo.innerHTML= `El perimetro del Cuadrado es ${res} cm.`
    })

    // Calculo area del cuadrado
    const areaCuadradobtn = document.querySelector('.btn-areaCuadrado')
    areaCuadradobtn.addEventListener ('click',()=>{
        let lado = document.querySelector('.box-main__input').value
        let res = areaCuadrado(lado) 
        parrafo.innerHTML= `El área del Cuadrado es ${res} cm².`
    }) 

    // calculo de perimetro triangulo
    const perimetroTriangulo = document.querySelector('.btn-perTriangulo')
    perimetroTriangulo.addEventListener('click',()=>{
        let a=Number(document.querySelector('.trianguloA').value)
        let b=Number(document.querySelector('.trianguloB').value)
        let c=Number(document.querySelector('.trianguloC').value)
        let sum01 = perTriangulo(a,b,c)
        console.log(sum01)
        parrafo.innerHTML=`El Perimetro del triangulo es ${sum01}`
    })


    // Calculo de area del triangulo

    const areTriangulo = document.querySelector('.btn-areaTriangulo')
    areTriangulo.addEventListener('click',()=>{
        let base = Number(document.querySelector('.baseTriangulo').value)
        let altura = Number(document.querySelector('.alturaTriangulo').value)
        let res = areaTriangulo(altura,base)
        console.log(res)
        return parrafo.innerHTML=`El area del triangulo es ${res}`
    })

    // Crearemos las funciones para perimetro del circulo, area, diametro
    let radio = document.querySelector('.radio')
    
    const diametroCirculo = document.querySelector('.btn-diameCirculo')
    diametroCirculo.addEventListener('click',()=>{
        let radioValor = radio.value
        console.log('El radio es ',radioValor)
        let res = diameCirculo(radioValor)
        return parrafo.innerHTML=`El perimetro del circulo es ${res}`
    })

    // Perimetro del circulo
    const perimetroCirculo = document.querySelector('.btn-PerCirculo')
    perimetroCirculo.addEventListener('click',()=>{
        let radioValor = radio.value
        console.log('El radio es ',radioValor)
        let res = perCirculo(radioValor)
        return parrafo.innerHTML=`El diametro del circulo es ${res}`
    })

    // Area del circulo
    const AreaCirculo = document.querySelector('.btn-areaCirculo')
    AreaCirculo.addEventListener('click',()=>{
        let radioValor = radio.value
        console.log('El radio es ',radioValor)
        let res = areaCirculo(radioValor)
        return parrafo.innerHTML=`El area del circulo es ${res}`
    })
})()
