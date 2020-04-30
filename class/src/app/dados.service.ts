import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  lista(){
    return this.http.get('assets/dados.json')
      .pipe(
        tap(console.log)
      );
    
  }
}
