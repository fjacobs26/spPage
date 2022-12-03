import { bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
/**
 * quitamos importacion de modulo, ahora solo levantamos el componente pero este debe ser un StandAloneComponent
 */
bootstrapApplication(AppComponent, {
  providers: [...appRoutes]
})