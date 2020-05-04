import { Component, OnInit } from '@angular/core';
import { Classe } from './model/classe.model';
import { Aluno } from './model/aluno.model';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
aluno: Aluno;
alunos =[];
turma: Classe;
turmas = [];

registros: [];

constructor() { }

   salvar(){
     this.turmas.push(this.turma);
     this.redefinir();
   }

   ngOnInit(): void{
     this.redefinir();
     this.turmas =[];
    }

  
  redefinir(){
    this.turma = new Classe(null,null,null,null,null);
   }
   
  listadeAluno(Classe){
    return this.turma.aluno;
  }

  encontrarTurma(){
    return ;
  }
  encontrarAluno(){
    
  }
  calcularMedia(){
   return ;
    
  }


  }
 

