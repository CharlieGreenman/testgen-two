import { Component } from '@angular/core';

@Component({
  selector: 'testgen-two-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-two';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
