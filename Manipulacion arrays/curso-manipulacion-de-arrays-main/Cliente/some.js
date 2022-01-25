// retorna un true o un false en caso se encuentre una coincidencia

const number = [1,2,3,4]
let rpta =false
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if(element%2==0){
        rpta = true
        break;
    }
}
console.log('forr',rpta)

const rpta2 = number.some(item=>{
    return item%2==0
})
console.log('some',rpta2)