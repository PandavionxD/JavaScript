class Persona{
    otro
    
    constructor({
        id,
        name,
        age=0,
        facebook ='',
        twitter='',
        instagram='',
        country = undefined
    }){
        this.id = id
        this.name = name
        this.age = age
        this.socialNetwork = {
            facebook,
            twitter,
            instagram
        }
        this.country=country
    }

    imprimir(){
        console.log(`${this.id} ->
        tu nombre es: ${this.name}
        tu edad es:  ${this.age}
        tu pais es: ${this.country}
        `)
    }
}

const p1 = new Persona({
    id:001,
    name:'alex',
    age:26,
    country:'peru'
})
p1.imprimir()

p1.otro = 'Hello desde JavaScript'
console.log(p1.otro)