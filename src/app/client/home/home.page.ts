import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
