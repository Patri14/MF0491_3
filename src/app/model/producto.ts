export class Producto{

    //atributos
    id: number;
    nombre:string;
    precio:number;
    precioOferta:boolean;
    foto:string;
    descripcion:string;
  
   constructor(nombre:string='anónimo', precio?:number ,precioOferta?:boolean, foto?:string, descripcion?:string, id?:number ){
        console.log('Producto constructor');
        
        //inicializamos las variables
        this.nombre = nombre;
        // if ( foto ){
        //     this.foto = foto;
        // }else{
        //     this.foto = 'assets/producto_default.jpg';
        // } 
        this.foto = foto; 
        
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.descripcion = descripcion;
        this.id=id;

        console.log('Producto constructor ' + this.foto +' soy la foto');

    }

}
