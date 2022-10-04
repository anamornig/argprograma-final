import { Component, OnInit } from '@angular/core';
import { PortfoliService } from 'src/app/servicios/portfoli.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  aboutData:any;
  aboutDescription:any;

  constructor(private datosPortfolio:PortfoliService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.aboutData=data;
    })
  }

}
