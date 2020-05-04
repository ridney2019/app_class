import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/dados.service';
import { Classe } from './model/classe.model';
import { Aluno } from './model/aluno.model';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

selectedTurma: Classe = new Classe(1,1, 'LPWEB');  
alunos: Aluno[];
turmas: Classe[];
turma: Classe;

registros: [];


constructor(private service: TurmasService) { }

  salvar(){
  this.turmas.push(this.turma);
  }

  ngOnInit(){
    this.turmas = this.service.getTurmas();
    this.onSelect(this.selectedTurma.id);
  }

  onSelect(frequencia) {
    this.alunos = this.service.getAlunos().filter(item => item.frequencia == frequencia);
  }
  


  encontrarTurma(){

  }
  encontrarAluno(){
    
  }
  calcularMedia(){

    
  }


  }
 

