import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecosController } from './precos.controller';
import { precos } from './precos.entity';
import { PrecosService } from './precos.service';


@Module({
  imports: [TypeOrmModule.forFeature([precos])],
  controllers: [PrecosController],
  providers: [PrecosService],
})
export class PrecosModule {}
