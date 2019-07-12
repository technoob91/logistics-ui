import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nz-layout>
    <nz-header style="background-color:#FFFFFF;">
      <h2 style="color: #FC6565; font-size:26px; text-align:center" nz-title>Logistics Service</h2>
    </nz-header>
    <nz-content style="height:100vh; padding: 20px"><router-outlet></router-outlet></nz-content>
  </nz-layout>
  `,
  styles: []
})
export class AppComponent {
  title = 'logistics-ui';
}
