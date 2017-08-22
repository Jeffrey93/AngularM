import { Component,EventEmitter } from '@angular/core';
declare var $:any;
declare var jQuery:any;
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ateco';
  selectOptions =[
    {option: '0', value: 'Steak'},
    {option: '1', value: 'Pizza'},
    {option: '2', value: 'Tacos'},
    {option: '2', value: 'Tacos'}
    ];

  
  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
