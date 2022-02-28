import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  //"Creamos una variable para cargar la data del json"
  miPortfolio: any;

  //"En el constructor injecto una clase en el componente"
  constructor(private datosPortfolio:PortfolioService)  { }

  //"Con los métodos llamo a los métodos de las clases"

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      //"Llamamos esa variable y le cargamos los datos del json"
      this.miPortfolio=data;
    })
  };

}
