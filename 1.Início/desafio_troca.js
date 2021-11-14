let a = 7; 
let b = 94;

let i = null; //variável temborária

//depois da troca a = 94 e b = 7
console.log("o valor de a é: " + a);
console.log("O valor de b é: " + b);

i = a;
a = b;
b = i; 

console.log("O valor de a é: " + a);
console.log("O valor de b é: " + b);