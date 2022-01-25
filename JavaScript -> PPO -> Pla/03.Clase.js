// Abstraccion en JavaScript

class Student {
    constructor({
        name,
        username,
        email,
        facebook,
        twitter,
        instagram,
        courses=[],
    }){
        this.name=name
        this.username=username
        this.email=email
        this.social={
            facebook,
            instagram,
            twitter
        }
        this.courses=courses
    }
}
class Escuelas{
    constructor({
        name,
        courses=[]
    }){
        this.name = name
        this.courses=courses
    }
}
class Courses{
    constructor({
        nombre,
        clases=[]
    }){
        this.nombre=nombre
        this.clases=clases
    }
}


// CREAMOS UNA INSTANCIA
const ProgBasica = new Courses({
    name:'Programacion Basica',
    clases:[
        'Introduccion a la programacion','Programacion basica I','Programacion basica II'
    ]
})

const escuela01 = new Escuelas({
    name:'Escuela de Desarrollo Web',
    courses:[
        ProgBasica,
        'Curso basico de html y css',
        'Curso practico de html y css'
    ]
}
)
const escuela02 = new Escuelas({
    name:'Escuela de Data science',
    courses:[
        ProgBasica,
        'Curso DataBusiness',
        'Curso DataViz'
    ]
}
)
const escuela03 = new Escuelas({
    name:'Escuela de Videojuegos',
    courses:[
        ProgBasica,
        'Curso de Unity',
        'Curso de Unreal'
    ]
}
)

const juan01 = new Student({
    name:'Juan',
    username : 'juandc',
    email:'juan:dc@gmail.com',
    courses:escuela01
})
console.log(juan01)
