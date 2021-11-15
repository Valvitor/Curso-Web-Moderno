//Novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{ 
        logradouro: 'Rua da Poeira',
        numero: 772
    }
}

const {nome, idade} = pessoa
console.log(nome +' tem ' + idade + ' anos e precisa de muito carinho!')

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)