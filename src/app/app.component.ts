import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productos-angular-lab';
  datos=[
    {codigo:1,descripcion:"papas",precio:"10.5"},
    {codigo:2,descripcion:"manzanas",precio:"12.1"},
    
    {codigo:3,descripcion:"melon",precio:"52.3"},
    {codigo:4,descripcion:"cebollas",precio:"17"},
    {codigo:5,descripcion:"calabaza",precio:"20"},
  ];

}
