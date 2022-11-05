import { Component, ElementRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistroService } from './registro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // selectedFile:File = null;
  title = "a";
  id = 1;
  
  producto = [
    {
    id:0,
    nombre:"Nombre",
    precio:"Precio",
    // imagen:"imagen"
    }
  ]

  constructor(private http:HttpClient){}


  // savefile(event: any) {

  //   this.selectedFile = event.target.files[0];
  // }

  // constructor(private registroService: RegistroService){

  //   this.obtener_localstorage();
  // }

  

  guardar(){

    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let precio = (document.getElementById("precio") as HTMLInputElement).value;
    // let imagen = (document.getElementById("imagen") as HTMLInputElement).value;

    let producto = [
      {
        id:this.id,
        nombre:nombre,
        precio:precio,
        // imagen:imagen
      }
    ]
    
    localStorage.setItem(String(this.id), JSON.stringify(producto));
    // this.producto = Object.assign({},this.producto,{newElementFieldName: producto_add});

    this.producto.push(JSON.parse('{"id": "' + this.id + '", "nombre":"' + nombre + '", "precio": "' + precio + '"}'));

    this.id++;

    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);¿
    // this.http.post('')
  }

  refrescar(){

    let producto = JSON.parse(localStorage.getItem("producto_add") || '{}');
    console.log(producto);

  }

  onSubmit() {
    return 
  }
  

  obtener_localstorage(){

    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem('producto') || '{}');


    console.log(nombre);
    console.log(persona);
  }

  

  grabar_localstorage(){

    let nombre:string = "Fernando";
  
    let persona = {
  
      nombre:"juan",
      edad:18
    }
  
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
  }
}



