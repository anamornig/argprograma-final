import { Component, OnInit } from '@angular/core';
import { PortfoliService } from 'src/app/servicios/portfoli.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  languageList:any;
  constructor(private datosPortfolio:PortfoliService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.languageList=data.languages;
    })
  }

}
