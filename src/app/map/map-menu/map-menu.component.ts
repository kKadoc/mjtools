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

  selectedMap: GridConfig;

  visible: boolean = true;

  constructor() { }

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {

  }

  onMapChange($event) {
    console.log($event);
    console.log(this.selectedMap);
    this.gridConfig.largeur = $event.largeur;
    this.configChanged();
  }

  configChanged() {
    this.messageEvent.emit("new Grid Config")
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
