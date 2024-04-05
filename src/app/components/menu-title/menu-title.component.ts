import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css'], // Corrigido para styleUrls
})
export class MenuTitleComponent {
  menuItems: MenuItem[] = [
    { title: 'Home', route: '/home' },
    { title: 'Menu', route: '/cafes' },
    { title: 'Local', route: '/local' },
  ];
}
