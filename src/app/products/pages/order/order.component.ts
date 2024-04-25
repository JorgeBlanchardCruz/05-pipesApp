import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public sortBy?: keyof Hero;

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.Blue },
    { name: 'Batman', canFly: false, color: Color.Black },
    { name: 'Spiderman', canFly: false, color: Color.Red },
    { name: 'Hulk', canFly: false, color: Color.Green },
    { name: 'Iron Man', canFly: true, color: Color.Red },
    { name: 'Thor', canFly: true, color: Color.Gold },
    { name: 'Captain America', canFly: false, color: Color.Blue },
    { name: 'Black Widow', canFly: false, color: Color.Black },
    { name: 'Hawkeye', canFly: false, color: Color.Purple },
    { name: 'Spider-Man', canFly: false, color: Color.Red },
    { name: 'Black Panther', canFly: false, color: Color.Black },
    { name: 'Doctor Strange', canFly: true, color: Color.Blue },
    { name: 'Ant-Man', canFly: false, color: Color.Red },
    { name: 'Wasp', canFly: true, color: Color.Yellow },
    { name: 'Vision', canFly: true, color: Color.Red },
    { name: 'Scarlet Witch', canFly: true, color: Color.Red },
    { name: 'Falcon', canFly: true, color: Color.Red },
    { name: 'Winter Soldier', canFly: false, color: Color.Black },
    { name: 'Star-Lord', canFly: true, color: Color.Blue },
    { name: 'Groot', canFly: false, color: Color.Brown },
    { name: 'Rocket Raccoon', canFly: true, color: Color.Brown },
    { name: 'Drax the Destroyer', canFly: false, color: Color.Green },
    { name: 'Gamora', canFly: false, color: Color.Green },
    { name: 'Captain Marvel', canFly: true, color: Color.Blue },
  ];

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  setSortBy(sortBy: keyof Hero) {
    this.sortBy = sortBy;
  }

}
