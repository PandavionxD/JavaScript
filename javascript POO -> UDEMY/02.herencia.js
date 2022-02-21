{}
class Persona{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    detallePersona(){
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}`)
    }
}

// Herencia del padre al hijo

class Empleado extends Persona{
    constructor(nombre,edad,sueldo){
        super(nombre,edad)
        this.sueldo = sueldo
    }
    detallePersona(){
        super.detallePersona()
        console.log(`Sueldo: ${this.sueldo}`)
    }
}

// Instanciamos un objeto de la clase

em1 = new Empleado('Juan',22,1000)
em1.detallePersona()