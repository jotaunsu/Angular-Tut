import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { SeccionJustificacionComponent } from './app/seccion-justificacion/seccion-justificacion.component';
import { SeccionInstalacionComponent } from './app/seccion-instalacion/seccion-instalacion.component';
import { SeccionPrimerosPasosComponent } from './app/seccion-primeros-pasos/seccion-primeros-pasos.component';
import { SeccionUtilizacionComponent } from './app/seccion-utilizacion/seccion-utilizacion.component';
import { SeccionFuncionamientoComponent } from './app/seccion-funcionamiento/seccion-funcionamiento.component';
import { SeccionConclusionesComponent } from './app/seccion-conclusiones/seccion-conclusiones.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'justificacion', component: SeccionJustificacionComponent },
      { path: 'instalacion', component: SeccionInstalacionComponent },
      { path: 'primeros-pasos', component: SeccionPrimerosPasosComponent },
      { path: 'utilizacion', component: SeccionUtilizacionComponent },
      { path: 'funcionamiento', component: SeccionFuncionamientoComponent },
      { path: 'conclusiones', component: SeccionConclusionesComponent },
      { path: '', redirectTo: 'justificacion', pathMatch: 'full' },
      { path: '**', redirectTo: 'justificacion' }
    ])
  ]
});
