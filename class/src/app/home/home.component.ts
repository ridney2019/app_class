import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TurmasService } from 'src/app/dados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  turmas: null;

  constructor(private service: TurmasService) {}


  ngOnInit(): void {
    this.service.lista()
      .subscribe((dados: any) => this.turmas = dados);
   }



}