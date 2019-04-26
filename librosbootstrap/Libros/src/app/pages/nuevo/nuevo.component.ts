import { FormsModule } from '@angular/forms';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  libros:any;
 

  constructor( private data:DataService) { }

  libro:any;
  id:any;

  ngOnInit() {
    this.libros={id:0, titulo:'', autor:'', precio:0};
    this.data.getLibros().subscribe(data=>{
      this.libro=data;
      this.id=this.libro[this.libro.length-1].id;
      console.log(this.id);

    });
  }

  enviar(){
    this.libros.id = this.id+1;
    this.data.postLibros(this.libros).subscribe(data=>{
      console.log(data);
    });
  }
}
