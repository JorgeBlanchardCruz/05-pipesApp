import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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


  //Key-Value Pipe
  public person = {
    name: 'George',
    age: 41,
    address: 'Ottawa, Canada',
  }


  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(() => console.log('Timer executed')));

  // las promesas no se pueden cancelar
  public myPromiseValue: Promise<string>  = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
      console.log('Promise executed');
      this.person.name = 'Alice';
    }, 3500);
  });


}
