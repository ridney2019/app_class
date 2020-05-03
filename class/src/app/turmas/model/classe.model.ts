import { Aluno } from './aluno.model';

export class Classe {
        
    constructor(
        public turma: string,
        public aluno: string, 
        public frequencia: number,
        public nota1: number,
        public nota2: number,
        public alunos: Aluno [],
        ) {
            
        }
}