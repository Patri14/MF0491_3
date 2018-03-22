import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_SUPERMERCADO } from './mocks.supermercado';
//import { element } from 'protractor';

@Injectable()
export class ProductoService {

  //declaro una variable, de tipo array de producto, y la inicializo vacía
  aProducto:Producto[] = [];
  producto;

  //variable de tipo array de Producto donde guardaremos los productos del carrito
  productoSelec: Producto[] = [];



  constructor() {
    console.log('ProductoService constructor');
    
   }

  //Devuelve todos los productos que tenemos en el supermercado
  getAll() : Producto[]{
     
  let jsonData = JSON.parse(MOCKS_SUPERMERCADO.supermercado);

  jsonData.forEach( element => {

      this.producto = new Producto( 
                       
                        element.nombre, 
                        element.precio, 
                        element.precioOferta,
                        element.oferta, 
                        element.cantidad,
                        element.foto,
                        element.descripcion,
                        element.id
                      );
                        
                       this.aProducto.push(this.producto);
                        
                      });
                                 
    return this.aProducto;

  }

 //llamamos a esta funcion desde el componente carrito para mostrar los productos del mismo
  obtenerProductoSelec(): Producto[] {
	    return this.productoSelec;
  }	

  //llamamos a esta función desde el componente supermercado para añadir productos al carrito
  anadirProducto (id:number): void {
    console.log('ProductoService añadir producto');
   
      let producto = this.aProducto.find(ob => ob.id === id);
      if (this.productoSelec.indexOf(producto) < 0) {	   
          this.productoSelec.push(producto);
       }

      //  console.log(producto);
      //  console.log(this.productoSelec);
  }
    
//llamamos a esta función desde el componente carrito para eliminar un producto del carrito
 eliminarProducto(id:number): void {
      console.log('ProductoService eliminar producto');
      
      let producto = this.productoSelec.find(ob => ob.id === id);
      console.log('Producto find '+ producto);
      let productoIndex = this.productoSelec.indexOf(producto);
      console.log('Producto index'+ producto);
      this.productoSelec.splice(productoIndex, 1);
      
      
    }


}//fin class ProductoService


