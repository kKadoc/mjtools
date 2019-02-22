import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridConfig } from '../grid-config'

@Component({
  selector: 'app-map-menu',
  templateUrl: './map-menu.component.html',
  styleUrls: ['./map-menu.component.css']
})
export class MapMenuComponent implements OnInit {
  @Input() gridConfig: GridConfig;
  visible: boolean = true;

  constructor() { }

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
  }

  configChanged() {
    this.messageEvent.emit("new Grid Config")
  }
}
