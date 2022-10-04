import { Component, OnInit } from '@angular/core';
import { PortfoliService } from 'src/app/servicios/portfoli.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projectList:any;
  constructor(private datosPortfolio:PortfoliService) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.projectList=data.projects;
    })
}
}