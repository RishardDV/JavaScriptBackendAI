import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  crear(datos: CrearUsuarioDto) {
    return this.prisma.usuario.create({
      data: datos,
    });
  }

  obtenerTodos() {
    return this.prisma.usuario.findMany({
      orderBy: { id: 'asc' },
    });
  }

  obtenerPorId(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  actualizar(id: number, datos: ActualizarUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: datos,
    });
  }

  eliminar(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
