import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cards = [
    {
      nombre: "Francisco Victorico",
      fecha: "12/12/2022",
      descripcion: "Foto de la Tutoria de Futbol",
      img: 'assets/img/goat.jpeg',
      autor: 'assets/img/iam.jpg',
      meGusta: 23,
      noMeGusta: 8,
      comentarios: 7,
      compartir: 4
    },
    {
      nombre: "Andrea Carreño",
      fecha: "12/12/2022",
      descripcion: "Foto de la Tutoria de Basquetbol",
      img: 'assets/img/jordan.jpeg',
      autor: 'assets/img/iam.jpg',
      meGusta: 15,
      noMeGusta: 2,
      comentarios: 3,
      compartir: 1
    },
    {
      nombre: "Moises Hernandez",
      fecha: "12/12/2022",
      descripcion: "Foto de la Tutoria de Baile",
      img: 'assets/img/baile.jpg',
      autor: 'assets/img/iam.jpg',
      meGusta: 30,
      noMeGusta: 1,
      comentarios: 7,
      compartir: 6
    }
  ];

  constructor() {}

}
