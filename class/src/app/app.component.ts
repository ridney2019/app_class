
import { Component, OnInit } from '@angular/core';
import { AlunosService } from './dados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   alunos: null;
   
  constructor(private service: AlunosService){}

  ngOnInit(): void {
   this.service.lista()
     .subscribe((dados: any) => this.alunos = dados);
  }

}
