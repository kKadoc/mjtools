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
      fichier: "./assets/cartes/camp-in-temple-ruins.jpg",
      largeur: 10,
      hauteur: 10,
      taille: 50,
      paddingLeft: 10,
      paddingTop: 10,
      transparent: true
    },
  ];
  }
}
