import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  proof = {
    data: ''
  }

  dateConverter: any;
  dateReal: any;

// Creamos array con los meses del año
meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana
dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Creamos el objeto fecha instanciándolo con la clase Date
fecha = new Date();
// Construimos el formato de salida

  constructor() { }

  ngOnInit() {
    // const fecha = Date.parse('12 Jan 2023 00:12:00 GMT');
    // console.log(fecha);
  }

  formFecha(){
    console.log(this.proof.data);
    console.log(Date.parse(this.proof.data));
    this.dateConverter = Date.parse(this.proof.data);
    this.dateReal = this.proof.data;
    console.log(this.dias_semana[this.fecha.getDay()] + ', ' + this.fecha.getDate() + ' de ' + this.meses[this.fecha.getMonth()] + ' de ' + this.fecha.getUTCFullYear());
  }

}
