// Crearemos la clase Estudiantes

class Students{
    constructor({
        username,
        name,
        pais,
        email,
        apellido,
        facebook=undefined,
        twitter=undefined,
        instagram=undefined,
        cursosAprobed =[],
    }){
        this.username=username
        this.name=name
        this.pais=pais
        this.apellido=email
        this.apellidp=apellido
        this.socialnetwork={
            facebook,
            twitter,
            instagram
        }
        this.cursosAprobed =cursosAprobed
    }
}

// CREAMOS INSTANCIAS
const Manuel01 = new Students({
    username:'pandavionxD',
    name :'Alex Daniel',
    pais : 'Perú',
    email : 'alex@mail.com',
    apellido : 'Artica Rivera',
    cursosAprobed : [
        'mate','comunicacion','historia'
    ]
})
console.log(Manuel01)

const manuel02 = new Students({
  username:'juandc',
  pais:'peru',
  email:'manuel@mail.com',
  name:'juan carlos',
  apellido:'alvarez',
  cursosAprobed:[
      'mate','historia'
  ],
  facebook:'juandc@mail.com',
  instagram:'juan_dc@mail.com' 
})
console.log(manuel02)


// CREAMOS OTRA CLASE
class Escuelas{
    constructor({
        escuela,
        cursos=[]
    }){
        this.escuela=escuela
        this.cursos=cursos
    }
}


const juan01 = new Escuelas({
    escuela:'Escuela de Programacion Web',
    cursos : [
        'Diseño web basico',
        'Diseño web practico',
        'Diseño Responsive Design'
    ]
})

const juan02 = new Escuelas({
    escuela:'Escuela de Programacion',
    cursos : [
        'Programacion basica',
        'Programacion practica',
        'Programacion POO'
    ]
})
console.log(juan01)
console.log(juan02)