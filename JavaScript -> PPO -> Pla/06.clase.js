// Polimorfimso
// Crearemos la clase Comentarios

class Coment{
    constructor({
        content,
        nameStudent,
        studentRole = "estudiante"
    }){ 
        this.content=content
        this.nameStudent = nameStudent
        this.studentRole=studentRole
        this.like = 0
    }
    publicar(){
        console.log(this.nameStudent + "("+ this.studentRole + ")")
        console.log(this.like + " Likes")
        console.log(this.content)
    }   
}
// QUE ES HERENCIA
class Courses{
    constructor({
        name,
        clases=[],
        isFree = false,
        languaje = undefined
    }){
        this.name=name
        this.clases=clases
        this.isFree=isFree
        this.languaje=languaje
    }
}

class Students{
    constructor({
        name,
        email,
        username,
        facebook=undefined,
        twitter=undefined,
        instagram=undefined,
        aprobedCoursers=[],
        learningPaths= []
    }){
        this.name=name
        this.email=email
        this.username=username
        this.socialmedia = {
            facebook,
            twitter,
            instagram
        }
        this.aprobedCoursers=aprobedCoursers
        this.learningPaths= learningPaths
    }
    insertarComentario(mensaje){
        const msj = new Coment({
            content:mensaje,
            nameStudent:this.name,
        })
        msj.publicar(mensaje)
    }
}

class FreeStudent extends Students{
    constructor(props){
        super(props)
    }

    aprobedourses(nuevoCurso){
        if(nuevoCurso.isFree){
            this.aprobedCoursers.push(nuevoCurso)
        }else{
            console.warn(`Lo siento ${this.name} solo puedes tomar cursos gratuitos.`)
        }
    }
}

class BasicStudent extends Students{
    constructor(props){
        super(props)
    }
    cursosAprobados(nuevoCurso){
        if(nuevoCurso.languaje!=='English'){
            this.aprobedCoursers.push(nuevoCurso)
        }else{
            console.warn(`Lo siento ${this.name} solo puedes llevar cursos en español`)
        }
    }
}

class ExpertStudent extends Students{
    constructor(props){
        super(props)
    }
}


class Profesor extends Students{
    constructor(props){
        super(props)
    }
    cursosAprobados(nuevoCurso){
        this.aprobedCoursers.push(nuevoCurso)
    }
    insertarComentario(mensaje){
        const msj = new Coment({
            content:mensaje,
            nameStudent:this.name,
            studentRole : "profesor"
            
        })
        msj.publicar(mensaje)
    }
}

// CREAREMOS INSTANCIAS DE LAS CLASES CREADAS
// CURSOS
const progBasica = new Courses({
    name:'Curso programacion basica',
    isFree:true,
})
const DisBasico = new Courses({
    name:'Curso de Diseño Web Basico',
    languaje:'Spanish'
})
const DisPratico = new Courses({
    name:'Curso de diseño web Practico',
    isFree:false,
    languaje:'English'
})

// ESTUDIANTES
const alex = new FreeStudent({
    name:'Alex',
    email:'alex@mail.com',
    username:'alex01',
})

const daniel = new BasicStudent({
    name:'Daniel',
    email:'daniel@mail.com',
    username:'daniel01'
})

const pepe = new ExpertStudent({
    name:'Jose',
    email:'pepe@mail.com',
    username:'pepe01'
})

alex.aprobedourses(progBasica)
alex.aprobedourses(DisBasico)
console.log(alex.aprobedCoursers)

daniel.cursosAprobados(DisBasico)
daniel.cursosAprobados(DisPratico)
console.log(daniel.aprobedCoursers)

// pepe.cursosAprobados(progBasica)
// pepe.cursosAprobados(DisBasico)
// console.log(pepe.aprobedCoursers)


const eduard = new Profesor({
    name:'Eduard',
    email:'jose_01@mail.com',
    username:'eduTeach'
})
console.log(eduard)

alex.insertarComentario('Me parece no tan genial!')
eduard.insertarComentario('Hola estudiantes! Soy su profesor')
// pepe.insertarComentario('Me paree genial!!! =)')