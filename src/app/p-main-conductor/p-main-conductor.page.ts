import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 


@Component({
    selector: 'app-p-main-conductor',
    templateUrl: './p-main-conductor.page.html',
    styleUrls: ['./p-main-conductor.page.scss'],
    imports: [CommonModule, FormsModule, RouterLink, IonicModule, RouterModule]
})
export class PMainConductorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
