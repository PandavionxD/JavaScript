let numeros=[1,2,3,4,1,2,2,2,3]
let a=0
for(let num of numeros){
    a+=num
}

console.log(a)

// Cabe señalar que a res se le puede dar un inicio de otro diferente a 0
let num1 = numeros.reduce((res=0,a)=>{
    return res +=a
})
console.log(num1)

//Usando reduce
const res = numeros.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1
    }else{
        obj[item]+=1
    }
    return obj
},{})
console.log(res)
