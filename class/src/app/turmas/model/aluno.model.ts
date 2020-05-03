import { TurmasService } from 'src/app/dados.service';
import { Component, OnInit } from '@angular/core';

export class Aluno implements OnInit {
    alunos:[];  

    constructor(private service: TurmasService) {}

    ngOnInit(): void {
        this.service.lista()
          .subscribe((dados: any) => this.alunos = dados);
       }

}