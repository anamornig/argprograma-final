import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfoliService } from 'src/app/servicios/portfoli.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");
  aboutData:any;
  aboutDescription:any;

  constructor(public personaService: PersonaService) {
    
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
    }
  }


