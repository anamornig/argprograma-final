import { Component, OnInit } from '@angular/core';
import { PortfoliService } from 'src/app/servicios/portfoli.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursosList:any;
  courses:any;
  course:any;
  constructor(private datosPortfolio:PortfoliService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.cursosList=data.courses;
    })
  }

}
