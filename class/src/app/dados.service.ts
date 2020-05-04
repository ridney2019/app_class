import { Classe } from './turmas/model/classe.model';
import { Aluno } from './turmas/model/aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  getTurmas() {
    return[
      new Classe(1, 2, 'Primeiro Ano do Médio – Turma A'),
      new Classe(2, 3, 'Primeiro Ano do Médio – Turma B'),
    ];
  }
  getAlunos() {
    return[
      new Aluno(3, 20,6,8),
      new Aluno(4, 21,7,9),
      new Aluno(5, 22,7,9),
      new Aluno(6, 23,7,9),
      new Aluno(7, 24,7,9),
      new Aluno(8,25,7,9)
    ];
  }

  constructor(private http: HttpClient) { }

  lista(){
    return this.http.get('assets/dados.json')
      .pipe(
        tap(console.log)
      );
    
  }
}
