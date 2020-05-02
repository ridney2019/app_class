import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Classe } from './models/classe.models';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

turma: Classe;
turmas = Array<Classe>();

   salvar(){
     this.turmas.push(this.turma);
     this.redefinir();
   }

   ngOnInit(): void{
     this.redefinir();
     this.turmas = new Array<Classe>();
   };
  redefinir(){
    this.turma = new Classe('');
   }
  }

