import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [IonicModule, RouterLink, HttpClientModule]
})
export class AppComponent {
  constructor() {
    addIcons({ logoIonic });
  }
}
