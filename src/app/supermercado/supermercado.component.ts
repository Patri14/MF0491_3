import { Component, OnInit,Input } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../providers/producto.service';


@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  aProducto : Array<Producto>; //array casteado con tipo producto
  productoSelec : Producto;

   //inyectamos para poder usar este servicio en el supermercado
  constructor( public productoService: ProductoService) {
    
    console.log('ProductoComponent constructor');     
  
    this.aProducto = new Array<Producto>();

   }

   //llamadas a los servicios
  ngOnInit() {

    console.log('ProductoComponent ngOnInit');    
    this.aProducto= this.productoService.getAll();

    //si no existe el producto creo una producto anónimo
    //this.productoSelec = this.aProducto[0] || new Producto('Anónimo');
  }

    //este producto lo recibe el hijo como input
    addProducto( productoDelInput : Producto ){
    console.log('ProductoComponent addProducto');
    this.productoSelec = productoDelInput;
  }

}

