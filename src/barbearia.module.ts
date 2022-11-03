import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cliente } from './cliente/cliente.entity';
import { clienteModule } from './cliente/cliente.module';
import { Empresa } from './empresa/empresa.entity';
import { EmpresaModule } from './empresa/empresa.module';
import { precos } from './preços/precos.entity';
import { PrecosModule } from './preços/precos.module';
// aqui o codigo em si se conecta com o banco de dados, sendo possivel armazenar os dados diretamente ao banco

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nest',
      entities: [cliente, Empresa, precos],
      synchronize: true,
    }),
    clienteModule, EmpresaModule, PrecosModule, //info vindo de .module
  ],
})
export class barbeariaModule {}