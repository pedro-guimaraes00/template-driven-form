import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client.model'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cliente: Client

  constructor() { }

  ngOnInit(): void {
    this.cliente = new Client()
  }

    
  onSubmit() {
    console.log(this.cliente)
  }

}
