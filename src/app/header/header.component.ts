import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
   inicio: string = 'Inicio';
   servicios: string = 'Servicios';
   contacto: string = 'Contacto';
   sobreMiEmpresa: string = 'Sobre Nosotros';
}
