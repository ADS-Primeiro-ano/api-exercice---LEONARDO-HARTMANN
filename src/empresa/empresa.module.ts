import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './empresa.entity';
import { EmpresaService } from './empresa.service';


@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule {}
