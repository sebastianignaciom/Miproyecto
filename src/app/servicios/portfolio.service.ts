import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//"Importamos el método Observable, porque nos sirven para solicitar datos de forma asincrónica"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  //"Injectamos el módulo httpClient para realizar las llamadas http"
  constructor(private http:HttpClient) { }

  //"Definimos el método como observable, para que se subcriba y espere los datos"
  obtenerDatos(): Observable<any>{
    return this.http.get('./assets/data/data.json')
  }
}
