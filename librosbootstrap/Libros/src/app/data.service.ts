import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  getLibros(){
    return this.http.get("http://localhost:8080/libros")
  }

  postLibros(libro){
    return this.http.post("http://localhost:8080/libros", libro);
  }

  enviarCorreo(correo){
    return this.http.post("http://localhost:8080/correo", correo);
  }

  constructor(private http:HttpClient) { }
}



