import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [IonicModule, RouterLink, HttpClientModule, RouterModule]
})
export class AppComponent {
  constructor() {
    addIcons({ logoIonic });
  }
}
