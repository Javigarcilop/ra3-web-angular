import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiEmpresaComponent } from './sobre-mi-empresa/sobre-mi-empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMiEmpresaComponent,
    ContactoComponent,
    ServiciosComponent,
    PoliticaPrivacidadComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
