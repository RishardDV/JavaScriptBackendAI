import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}


@Get()
    obtenerTodos() {
    return this.productosService.obtenerTodos();
    }
@Post()
Crear(@Body() nuevoProducto: { nombre: string; precio: number; stock: number }) {
    return this.productosService.crear(nuevoProducto);
    }
}
