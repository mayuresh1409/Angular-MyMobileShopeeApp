import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <nav class='navbar navbar-expand-lg navbar-dark bg-dark p-3'>
    <a class='navbar-brand'>{{title}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome' style="color: white">Home</a></li>
      <li><a class='nav-link' routerLink='/products' style="color: white">Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  title = 'MyMobileShopee';
}
