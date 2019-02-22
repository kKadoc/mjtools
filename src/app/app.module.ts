import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MapComponent } from './map/map.component';
import { MapMenuComponent } from './map/map-menu/map-menu.component';
import { MapGridComponent } from './map/map-grid/map-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MapComponent,
    MapMenuComponent,
    MapGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
