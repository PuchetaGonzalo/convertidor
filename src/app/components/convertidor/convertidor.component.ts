import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD'
  quiero = 'EUR'
  total = 0;



  monedas:string[] = ['USD', 'EUR', 'PES']

  constructor() { }

  ngOnInit(): void {
  }

  convertir() { 
    
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad *0.91
        }
        if (this.quiero === 'PES') {
          this.total = this.cantidad *109
        }
        break;
      case 'EUR':
        if (this.quiero === 'EUR') {
          this.total = this.cantidad
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad *1.11
        }
        if (this.quiero === 'PES') {
          this.total = this.cantidad *120
        }
        break;
      case 'PES':
        if (this.quiero === 'PES') {
          this.total = this.cantidad
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad *0.0092
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad *0.0084
        }
        break;
      
    }

  }
}
