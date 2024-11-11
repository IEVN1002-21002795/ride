import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-p-registro-conductor',
  templateUrl: './p-registro-conductor.page.html',
  styleUrls: ['./p-registro-conductor.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule]
})
export class PRegistroConductorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
