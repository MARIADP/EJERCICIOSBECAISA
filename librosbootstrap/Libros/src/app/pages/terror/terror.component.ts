import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {

  libros:any;
  constructor( private data:DataService) { }

  ngOnInit() {
    this.data.getLibros().subscribe(data=>{
      console.log(data);
      this.libros=data;
  });
}
}







   
   
  

  
     
       
      
  