
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    libros:any;
    constructor( private data:DataService) { }
  
    ngOnInit() {
  
      this.data.getLibros().subscribe(data=>{
        console.log(data);
        this.libros=data;
      });
      
    }
  
  }

  /*libros: {titulo:string, autor:string, precio:number}[]=[
    {"titulo": "el monstruo de colores", "autor":"a1", "precio":1},
    {"titulo": "luna", "autor":"a2", "precio":2},
    {"titulo": "el principito", "autor":"a3", "precio":3},
    {"titulo": "el rey", "autor":"a4", "precio":4},
  ] */



 /*libros = [

    {
      "titulo": "El monstruo de colores",
      "autor": "a1",
      "precio": 1
    },

    {
      "titulo": "luna",
      "autor": "a2",
      "precio": 2
    },
    {
      "titulo": "el principito",
      "autor": "a3",
      "precio": 3
    }

  ];*/
  




