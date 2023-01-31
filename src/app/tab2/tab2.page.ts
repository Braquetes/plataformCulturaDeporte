import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  asistencia = {
    actividad: 'Futbol',
    encargado: 'Lic. Julio',
    periodo: 'Enero-abril',
    horarioNeto: '25',
    lugar: 'Cancha deportiva'
  };

  estudiante = {
    nombre: 'Mara Andrea Martinez Carreño'
  };

  listaAsistencia = [
    {
      idEstudiante: 1,
      idActividad: 1,
      fecha: 1673558732,
      observaciones: 'Permiso'
    },
    {
      idEstudiante: 1,
      idActividad: 1,
      fecha: 1673558580,
      observaciones: 'Presente'
    },
  ];

  constructor() {}

}
