// Creamos la funcion para que sume el total


// let sumarSueldos = sueldos.reduce((total= 0,res)=>{
    //     total +=res
    //     return total
    // })
    let total = []
    // hacemos una funcion para que agregue elementos al array
    function agregarsueldos(){
    let num1 = document.getElementById("sueldo").value
    let num2 = Number(num1)
    console.log(typeof num2)
    total.push(num2)
    return total
    }


function sumar (){
    let a = total.reduce((total=0,res)=>{
        total +=res
        return total
    })
    let b =a /total.length 
    let c = document.getElementById("parrafo")
    return c.textContent = `EL promedio de los numeros ingresados es ${b }`

}



