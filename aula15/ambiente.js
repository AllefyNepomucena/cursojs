let num =[5,8,2,9,3]
num.sort()
num[5]=10
num.push(11)
console.log(`Nosso vetor primeiro vetor e ${num[0]}`)
console.log(`o vetor tem ${num.length} posiçoes`)

let pos = num.indexOf(8)
if (pos == -1 ){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor esta na posicao ${pos}`)
}