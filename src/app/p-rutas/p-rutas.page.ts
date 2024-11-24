import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-p-rutas',
  templateUrl: './p-rutas.page.html',
  styleUrls: ['./p-rutas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, MapComponent]
})
export class PRutasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
