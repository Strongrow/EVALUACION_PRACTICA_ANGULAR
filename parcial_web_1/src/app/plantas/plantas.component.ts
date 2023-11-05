import { Component, OnInit } from '@angular/core';
import { PlantasService } from './plantas.service';
import { Plantas } from './plantas';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  plantas: Array<Plantas> = [];
  totalPlantasInterior: number = 0;
  totalPlantasExterior: number = 0;

  constructor(private plantasService: PlantasService) { 
    this.contarPlantasInterior();
  }

  getPlantas(){
    this.plantasService.getPlantas().subscribe((plantas) =>{
      this.plantas = plantas;
      this.contarPlantasInterior();
      this.contarPlantasExterior();
    })
  }

  contarPlantasInterior(){
    this.totalPlantasInterior = this.plantas.filter(plant => plant.tipo === 'Interior').length
  }

  contarPlantasExterior(){
    this.totalPlantasExterior = this.plantas.filter(plant => plant.tipo === 'Exterior').length
  }

  ngOnInit() {
    this.getPlantas();
  }

}
