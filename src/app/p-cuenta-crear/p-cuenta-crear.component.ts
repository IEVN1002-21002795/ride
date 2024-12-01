import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-p-cuenta-crear',
  templateUrl: './p-cuenta-crear.component.html',
  styleUrls: ['./p-cuenta-crear.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]

})
export class PCuentaCrearComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
