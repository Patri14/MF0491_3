import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../providers/producto.service';
import { Producto } from '../../model/producto';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public productosCarritoItems$: Array<Producto[]> =[];
  public productosCarritoItems: Producto[] = [];

  constructor( private productoService: ProductoService) {
   
     

   }

  ngOnInit() {
  }

}

