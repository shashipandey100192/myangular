import { Component } from '@angular/core';

@Component({
  selector: 'app-ngbootstrap',
  templateUrl: './ngbootstrap.component.html',
  styleUrls: ['./ngbootstrap.component.scss']
})
export class NgbootstrapComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
