import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-p-carga',
  templateUrl: './p-carga.page.html',
  styleUrls: ['./p-carga.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PCargaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
