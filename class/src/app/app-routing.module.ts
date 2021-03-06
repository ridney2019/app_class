import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TurmasComponent } from './turmas/turmas.component';

const routes: Routes = [{ 
  path: '',
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'turmas', component: TurmasComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
