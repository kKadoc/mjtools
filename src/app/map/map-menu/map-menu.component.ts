import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridConfig } from '../grid-config'

@Component({
  selector: 'app-map-menu',
  templateUrl: './map-menu.component.html',
  styleUrls: ['./map-menu.component.css']
})
export class MapMenuComponent implements OnInit {
  @Input() gridConfig: GridConfig;
  @Input() cartes: GridConfig[];

  //selectedMap: GridConfig;

  visible: boolean = true;

  constructor() { }

  @Output() messageEvent = new EventEmitter<GridConfig>();

  ngOnInit() {

  }

  onMapChange($event) {
    //console.log("event", $event);
    //console.log("selectedMap", this.selectedMap);
    //this.gridConfig.largeur = this.selectedMap.largeur;
    //this.gridConfig.hauteur = this.selectedMap.hauteur;
    this.configChanged();
  }

  configChanged() {
    console.log("gridConfig in map-menu.component", this.gridConfig);
    this.messageEvent.emit(this.gridConfig);
  }

  baisser(valeur) {
    console.log(valeur);
    if (valeur > 0) {
      valeur--;
    }
    return valeur;
  }

  augmenter(valeur) {
    return ++valeur;
  }
}
