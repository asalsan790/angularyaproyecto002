import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Artículo que tengo en memoria
  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melón', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabazas', precio:20},
              ];

  hayRegistros() {
    return this.articulos.length>0;              
  }

  borrar(art: any) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        // a partir del índice x borra 1
        this.articulos.splice(x,1);  
        return;
      }
  }

  agregar() {
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    // añade un elemento al array
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    // Limpiamos
    this.art.codigo=null;
    this.art.descripcion=null;
    this.art.precio=null;    
  }

  seleccionar(art: any) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}
