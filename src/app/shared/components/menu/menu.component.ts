import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{

  public items: MenuItem[] = [];

  ngOnInit(): void {

    this.createMenuItems();

  }

  private createMenuItems(): void {

    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Texto y fechas', icon: 'pi pi-align-left' },
          { label: 'Números', icon: 'pi pi-dollar' },
          { label: 'No comunes', icon: 'pi pi-globe' },
        ]
      },

      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          { label: 'Mayúsculas', icon: 'pi pi-sort-alpha-up' },
          { label: 'Fecha en español', icon: 'pi pi-calendar' },
        ]
      }

    ];

  }

}