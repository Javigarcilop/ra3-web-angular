import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiEmpresaComponent } from './sobre-mi-empresa/sobre-mi-empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';




const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobreMiEmpresa', component: SobreMiEmpresaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'politicaPrivacidad', component: PoliticaPrivacidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
