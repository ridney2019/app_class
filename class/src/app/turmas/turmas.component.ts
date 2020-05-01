import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  turmas=null;
  turma=null;
  aluno=null;
  frequencia=null;
  constructor() { }

  ngOnInit(): void {
  }

}
