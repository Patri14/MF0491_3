import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../providers/producto.service';


@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {

  aProducto : Array<Producto>; //para que recoger todos los productos de MOCK
  productoSelec : Producto;//para el producto que seleccionaremos para el carrito
  acumulador: number = 0;//para recoger la cantidad de productos seleccionados

   //inyectamos para poder usar este servicio en el supermercado
  constructor( public productoService: ProductoService) {
    
    console.log('SupermercadoComponent constructor');     
    
    this.aProducto = new Array<Producto>(); 
    console.log(this.aProducto); 
   }

   //llamadas a los servicios
  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit'); 

    this.aProducto= this.productoService.getAll();
     // Productos rebajados
    this.verOferta();
 
  }

  //si el prpducto tiene oferta calcular su precio con un descuento del 20 por ciento
  verOferta() {
    console.log('SupermercadoComponent función verOferta');
    
    for (var producto of this.aProducto){
      console.log('SupermercadoComponentver Oferta '+ producto.precioOferta)
    
      if(producto.precioOferta == true){
        producto.oferta = producto.precio-(producto.precio* 20 / 100);
        //console.log(producto); 
      }
    }
  }
   
  //sumar cantidad del producto
  masCantidad() {
    this.acumulador++;
    console.log(this.acumulador);
  }

  // restar cantidad del producto
  menosCantidad() {
    this.acumulador--;
    console.log(this.acumulador);  
  }

  //añadir producto al carrito
  anadirProductoCarro(id:number): void {
    console.log('ProductoComponent añadir producto al carro');

    this.productoService.anadirProducto(id);
  }
}//fin class ProductoComponent




