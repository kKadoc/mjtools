import { Component, OnInit } from '@angular/core';
import { GridConfig } from './grid-config'
import { CarteService } from './carte.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  cartes: GridConfig[];
  gridConfig: GridConfig;

  grid: boolean[][];

  private imgSrc;

  constructor(private carteService: CarteService) { }

  ngOnInit() {
    this.cartes = this.carteService.getCartes();
    this.gridConfig = this.cartes[0]
    this.buildGrid();
  }

  receiveMessage($event) {
    this.buildGrid();
  }

  buildGrid(){
    this.imgSrc = this.gridConfig.fichier;
    this.grid = [];
    for(var cpt_ligne = 0; cpt_ligne < this.gridConfig.hauteur; ++cpt_ligne) {
      this.grid[cpt_ligne] = [];
      for(var cpt_col = 0; cpt_col < this.gridConfig.largeur; ++cpt_col) {
        this.grid[cpt_ligne][cpt_col] = false;
      }
    }
  }

}
