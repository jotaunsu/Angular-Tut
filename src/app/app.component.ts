import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes} from '@angular/router'


import { SeccionJustificacionComponent } from './seccion-justificacion/seccion-justificacion.component';
import { SeccionInstalacionComponent } from './seccion-instalacion/seccion-instalacion.component';
import { SeccionPrimerosPasosComponent } from './seccion-primeros-pasos/seccion-primeros-pasos.component';
import { SeccionUtilizacionComponent } from './seccion-utilizacion/seccion-utilizacion.component';
import { SeccionFuncionamientoComponent } from './seccion-funcionamiento/seccion-funcionamiento.component';
import { SeccionConclusionesComponent } from './seccion-conclusiones/seccion-conclusiones.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SeccionConclusionesComponent,SeccionJustificacionComponent,
    SeccionInstalacionComponent,SeccionPrimerosPasosComponent,SeccionUtilizacionComponent,
    SeccionFuncionamientoComponent],
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],

})
export class AppComponent {
 tittle='Tutorial Angular';
  }
