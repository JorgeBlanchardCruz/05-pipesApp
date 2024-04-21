import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'John';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  public changeClient(): void {
    this.name = this.name === 'John' ? 'Melissa' : 'John';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }


  //i18n Plural
  public clients: string[] = ['Melissa', 'Peter', 'Mary', 'Paul', 'Jane', 'George', 'Alice'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos # cliente',
    other: 'tenemos # clientes'
  };

  public popClient(): void {
    this.clients.pop();
  }

}
