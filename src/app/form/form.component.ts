import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
