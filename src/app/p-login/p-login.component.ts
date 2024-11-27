import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PLoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

