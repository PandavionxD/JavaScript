class Persona{
    #nombre
    #edad
    constructor(nombre,edad){
        this.#nombre=nombre
        this.#edad=edad
    }
    get getEdad(){
        return this.#edad
    }
    set setEdad(edad){
        this.#edad =edad
    }
    get getNombre(){
        return this.#edad
    }
    set setNombre(nombre){
        this.#nombre=nombre
    }
}

p1 = new Persona('Alex',26)
console.log(p1)
console.log(p1.getEdad)
p1.setEdad = 28
console.log(p1)