/* eslint-disable */




// arrays
let arrayDeString: Array<string> = ['a','b']
let arrayDeNumeros: Array<number> = [1,2,3]
let arrayDeNumeros2: number[] = [1,2,3]


// objetos
let pessoa: {nome: string, idade: number, adulto?:boolean} = {
    idade: 30,
    nome: 'rafa'
}

console.log(pessoa.nome)

// funcoes
function soma(x: number, y:number):number{
    return x + y
}

const result = soma(2,2)