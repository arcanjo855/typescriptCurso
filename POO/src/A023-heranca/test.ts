import assert from 'node:assert'
import { Aluno } from '.'


const aluno = new Aluno('Rafa', 23, 'xxxxx')



assert(aluno.getIdade() === 21, 'Deve retornar a idade da Class base')