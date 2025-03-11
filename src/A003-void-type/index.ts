/* eslint-disable */

function semRetorno(...args: string[]):void {
    console.log(args.join(' '));
}


const pessoa = {
    nome: 'rafa',
    sobrenome: 'arcanjo',

    exibirNome():void{
        console.log(pessoa.nome + ' ' + pessoa.sobrenome)
    }
}

semRetorno('rafael', 'arcanjo')
pessoa.exibirNome();


export {pessoa};