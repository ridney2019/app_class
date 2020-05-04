
import { TurmasService } from 'src/app/dados.service';
import { Component, OnInit } from '@angular/core';

export class Aluno implements OnInit {
  aluno:Aluno;  
  alunos = []; 

    constructor(private service: TurmasService) {}

    salvar(){
       this.alunos.push(this.aluno);
       this.redefinir();
      }   
      redefinir(){
        this.aluno = new Aluno(null);
       }

    ngOnInit(): void {
        this.service.lista()
          .subscribe((dados: any) => this.alunos = dados);
       }

}