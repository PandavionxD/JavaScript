// Crearemos una clase

class Student{
    constructor(name,age,cursosAprobados){
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }
    agregarCursos(cursos){
        // PRIMERA FORMA
        // for (let curso of cursos){
        //     this.cursosAprobados.push(curso)
        // }
        
        // SEGUNDA FORMA
        const items = cursos.map((item)=>{
            return this.cursosAprobados.push(item)
        })
    }
}

const carlos = new Student(
    'Miguel',
    28,
    ['matematicas',
       'Lenguaje',
       'Geografia',
       'Historia']
)
console.log(carlos)
let nuevosCursos =['aritmetica','biologia','Ingles']

carlos.agregarCursos(
    nuevosCursos
)
console.log(carlos)
