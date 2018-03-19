import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../providers/producto.service';
import { Producto } from '../../model/producto';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit { 
  
  productosCarro: Producto[] = [];
  acumulador:number = 0;

  constructor(private productoService: ProductoService) {
    console.log('CarritoComopent constructor');
    console.log(this.productosCarro);
   }
    
  
  anadirProductoCarro(): void {
    console.log('CarritoComopent añadir producto al carrito');
       this.productosCarro = this.productoService.obtenerProductoSelec();
       this.acumulador++;
        console.log(this.acumulador);
      
        this.totalCarrito();    
  }

  ngOnInit(): void {
    console.log('CarritoComopent onInit');
       this.anadirProductoCarro();
       this.acumulador++;
       console.log(this.acumulador);
  }

  eliminarProductoCarro(id:number): void {
    console.log('CarritoComopent eliminar producto del carrito');
       this.productoService.eliminarProducto(id);
  }

  totalCarrito(){
    var total=0;
    
    for(let producto of this.productosCarro){
      if(producto.precioOferta == true){
        producto.precio = producto.oferta;
        total += producto.precio;
      }else{
        total += producto.precio;  
      }
    }

   return total;
  }   
}//fin class CarritoComponent




