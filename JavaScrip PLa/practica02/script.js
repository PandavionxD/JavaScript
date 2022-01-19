function precioTotal(precio,descuento){
    let descuento1= (precio*descuento)/100
    let precioTotal = precio -descuento1
    let parrafo = document.getElementById("parrafo")
     return parrafo.textContent = `El precio total es ${precioTotal}`
    
}

function PrecioTotal(){
    let precio = document.getElementById("precio").value
    let descuento = document.getElementById("descuento").value
    precioTotal(precio,descuento)
}

let cupones = ['camisas','chompas','polos']


