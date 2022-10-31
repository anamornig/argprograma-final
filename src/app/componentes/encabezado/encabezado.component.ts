import { Component, OnInit } from '@angular/core';
import { PortfoliService } from 'src/app/servicios/portfoli.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("","","");
  aboutData:any;
  aboutDescription:any;
  constructor(public personaService: PersonaService) {
    
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
    }
  }

