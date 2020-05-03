import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/dados.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  alunos: null;

  constructor(private service: TurmasService) { }

  ngOnInit(): void {
    this.service.lista()
      .subscribe((dados: any) => this.alunos = dados);
   }
}
