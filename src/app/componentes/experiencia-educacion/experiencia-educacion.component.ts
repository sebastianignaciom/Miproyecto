import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {

  experienciaList: any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList=data.experiencia;
    })
  }

}
