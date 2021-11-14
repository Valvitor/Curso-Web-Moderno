const saudacao = 'Opa' //Contexto léxico 1
function exec(){
    const saudacao = 'Falaa!' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Poeira',
        numero: 5
    }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)