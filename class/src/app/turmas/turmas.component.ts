import { Component, OnInit } from '@angular/core';
import { Classe } from './model/classe.model';
import { TurmasService } from 'src/app/dados.service';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
turma: Classe;
turmas = [];
registros: [];

constructor(private service: TurmasService) { }

   salvar(){
     this.turmas.push(this.turma);
     this.redefinir();
   }

   ngOnInit(): void{
     this.redefinir();
     this.turmas =[];
   };
  redefinir(){
    this.turma = new Classe(null, null, null, null, null, []);
   }
   
  listadeAluno(Classe){
    return this.turma.alunos;
  }

  encontrarTurma(){

  }
  encontrarAluno(){
    
  }
  calcularMedia(){
    
  }


  }
 

