import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_SUPERMERCADO } from './mocks.supermercado';
//import { element } from 'protractor';

@Injectable()
export class ProductoService {

  //declaro una variable, de tipo array de producto, y la inicializo vacía
  aProducto:Producto[] = [];
  producto;

  constructor() {
    console.log('ProductoService constructor');
   }

  /***Devuelve todos los productos que tenemos en el supermercado***/
  getAll() : Producto[]{
     
  let jsonData = JSON.parse(MOCKS_SUPERMERCADO.supermercado);

  jsonData.forEach( element => {

      this.producto = new Producto( 
                       
                        element.nombre, 
                        element.precio, 
                        element.precioOferta, 
                        element.foto,
                        element.descripcion,
                        element.id
                        
                        );
                       this.aProducto.push(this.producto);

                      });
                  
    return this.aProducto;

  }

}


