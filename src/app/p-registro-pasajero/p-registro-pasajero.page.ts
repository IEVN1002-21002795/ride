import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-p-registro-pasajero',
  templateUrl: './p-registro-pasajero.page.html',
  styleUrls: ['./p-registro-pasajero.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule, IonicModule]
})
export class PRegistroPasajeroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
