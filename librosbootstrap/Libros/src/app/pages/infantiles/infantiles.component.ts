import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infantiles',
  templateUrl: './infantiles.component.html',
  styleUrls: ['./infantiles.component.scss']
})
export class InfantilesComponent implements OnInit {

  libros:any;
  constructor( private data:DataService) { }

  ngOnInit() {

    this.data.getLibros().subscribe(data=>{
      console.log(data);
      this.libros=data;
    });
    
  }

}
