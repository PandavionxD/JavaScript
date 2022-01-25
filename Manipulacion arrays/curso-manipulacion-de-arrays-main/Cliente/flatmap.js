// es la fucion de usar map y despues lo aplanamos con flat
const user = [
    {
        userid:1,
        usernmae:'Tom',
        atributos:[
            'nice','cute'
        ]
    },
    {
        userid:2,
        usernmae:'alex',
        atributos:[
            'lovelly'
        ]
    },
    {
        userid:3,
        usernmae:'NIco',
        atributos:[
            'nice','cool'
        ]
    }
]
const res01 = user.flatMap(item=>{
    return item.atributos
})
console.log(res01)


