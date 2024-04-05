import { Component } from '@angular/core';

type MenuItem = {
  image: string[];
  name: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-menu-itens',
  templateUrl: './menu-itens.component.html',
  styleUrl: './menu-itens.component.css',
})
export class MenuItensComponent {
  menuItens: MenuItem[] = [
    {
      image: ['./../../assets/item1-menu.jpg'],
      name: 'CodeBrew Café',
      price: 7.5,
      description: 'Capuccino com canela',
    },
    {
      image: ['./../../assets/item2-menu.jpg'],
      name: 'Codepresso Café',
      price: 5.5,
      description: 'Café puro ',
    },
    {
      image: ['./../../assets/item3-menu.jpg'],
      name: 'Java Jolt Café',
      price: 8.5,
      description: 'Latte mesclado ',
    },
    {
      image: ['./../../assets/item4-menu.jpg'],
      name: 'ByteBlend Milkshake',
      price: 10.5,
      description: 'Milshake de café gelado',
    },
    {
      image: ['./../../assets/item5-menu.jpg'],
      name: 'Cup of Code',
      price: 7.5,
      description: 'Moccacino com avelã',
    },
    {
      image: ['./../../assets/item6-menu.jpg'],
      name: 'CodeShake Supreme',
      price: 9.5,
      description: 'Café gelado com chantilly',
    },
  ];
}
