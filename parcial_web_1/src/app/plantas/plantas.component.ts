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

  constructor(private plantasService: PlantasService) { }

  getPlantas(){
    this.plantasService.getPlantas().subscribe((plantas) =>{
      this.plantas = plantas;
    })
  }

  ngOnInit() {
    this.getPlantas();
  }

}
