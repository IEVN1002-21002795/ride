import { Component } from '@angular/core';
import { MapComponent } from '../mapa/mapa.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-p-rutas',
  template: `
    <ion-content>
      <app-mapa></app-mapa>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, MapComponent]
})
export class PRutasPage {
  constructor() {}
}
