import { Injectable } from '@angular/core';
import { GridConfig } from './grid-config';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  constructor() { }

  public getCartes(): GridConfig[] {
    return [{
      nom: "Temple",
      fichier: "./assets/cartes/camp-in-temple-ruins.jpg",
      largeur: 15,
      hauteur: 8,
      taille: 100,
      paddingLeft: 10,
      paddingTop: 10,
      transparent: true
    },
    {
      nom: "Temple 2",
      fichier: "./assets/cartes/LS1SdYD.jpg",
      largeur: 50,
      hauteur: 38,
      taille: 43,
      paddingLeft: 50,
      paddingTop: 39,
      transparent: true
    },
  ];
  }
}
