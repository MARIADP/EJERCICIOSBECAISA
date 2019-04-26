import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.scss']
})
export class CONTACTARComponent implements OnInit {

  correos:any;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.correos={nombre:'', email:'', asunto:'', comenta:''};
  
}

  enviar(){
    
    this.data.enviarCorreo(this.correos).subscribe(data=>{
      console.log(data);
    });
  }

}
