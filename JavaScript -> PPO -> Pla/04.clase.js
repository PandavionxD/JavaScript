// ENCAPSULAMIENTO
class courses {
    constructor(
        name,
        clases=[]
    ){
        this._name=name
        this.clases=clases
    }

    get name (){
        return this._name
    }
    set name (nuevoNombre){
        if(this._name ==='Curso maloso de programacion'){
            console.log('web, No!!!!')
        }else{
            return this._name = nuevoNombre
        }
    }
}

const juan =new Object({
    name:'Curso de Programacion basica',
    clases:[
        'Curso de introduccion',
        'Curso de programacion I',
        'Curso de programacion II'
    ]})
console.log(juan)
console.log(juan.name)
juan.name = 'Curso gratis de Programación.'
console.log(juan)
juan.name = 'Curso maloso de programacion'

