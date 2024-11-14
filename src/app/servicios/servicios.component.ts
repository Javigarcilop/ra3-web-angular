import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass']
})
export class ServiciosComponent {
  
  services = [
    { name: 'SEO', description: 'Optimización para motores de búsqueda.' },
    { name: 'Redes Sociales', description: 'Gestión de campañas publicitarias en redes sociales.' },
    { name: 'Diseño Gráfico', description: 'Creación de piezas visuales atractivas.' },
    { name: 'Publicidad Online', description: 'Campañas de Google Ads y otras plataformas.' },
    { name: 'Email Marketing', description: 'Estrategias de email marketing para captar y fidelizar clientes.' },
    { name: 'Consultoría Estratégica', description: 'Asesoramiento en la creación de estrategias de marketing a medida.' }
  ];
}
