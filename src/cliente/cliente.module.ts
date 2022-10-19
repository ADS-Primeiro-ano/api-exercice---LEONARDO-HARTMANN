import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './cliente.controller';
import { cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';


@Module({
  imports: [TypeOrmModule.forFeature([cliente])],
  controllers: [ClientesController],
  providers: [ClienteService],
})
export class clienteModule {}
