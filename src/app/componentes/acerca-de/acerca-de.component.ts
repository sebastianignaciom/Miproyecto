import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  //"Creamos una variable para cargar la data del json"
  miPortfolio: any;

  //"En el constructor injecto una clase en el componente"
  constructor(private datosPortfolio:PortfolioService)  { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      //"Llamamos esa variable y le cargamos los datos del json"
      this.miPortfolio=data;
    })
  };

}
