import { Component, OnInit } from '@angular/core';
import { GridConfig } from './grid-config'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  gridConfig: GridConfig = {
    largeur: 20,
    hauteur: 15
  }

  grid: string[][];

  constructor() { }

  ngOnInit() {
    this.buildGrid();
  }

  receiveMessage($event) {
    console.log($event);
    this.buildGrid();
  }

  buildGrid(){
    this.grid = [];
    for(var cpt_ligne = 0; cpt_ligne < this.gridConfig.hauteur; ++cpt_ligne) {
      this.grid[cpt_ligne] = [];
      for(var cpt_col = 0; cpt_col < this.gridConfig.largeur; ++cpt_col) {
        this.grid[cpt_ligne][cpt_col] = cpt_ligne + "-" + cpt_col;
        console.log(cpt_ligne + "-" + cpt_col);
      }
    }
  }

}
