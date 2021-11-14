//Função sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(4)
imprimirSoma(2,4,6,7,78)


//Função com retorno
function soma(a, b=1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())