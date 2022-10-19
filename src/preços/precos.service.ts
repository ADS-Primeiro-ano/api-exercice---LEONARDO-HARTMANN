import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { precos } from './precos.entity';

interface Request { // quando houver alguma requisição tais dados dentro de interface serão apresentados
    nomecorte: string;
    valorcorte: number;
}

//aqui é um construtor otimizado, sendo ele a setagem de valores, exemplo = "this.nome = nome;"
@Injectable()
export class PrecosService {
  constructor(
    @InjectRepository(precos)
    private precosRepository: Repository<precos>, //o repositorio é a classe cliente dentro de "entity"
  ) {}

  //async é uma tarefa assincrona, tendo como função executar tudo e retornar uma resposta

  async create({ nomecorte, valorcorte}: Request): Promise<precos> { //pegando a requisição create feita no "cliente.controller"
    // quando os dados forem preenchidos, serão passados para "user"
    const user = await this.precosRepository.create({ 
      nomecorte,
      valorcorte,
    });

    await this.precosRepository.save(user); //salvando os dados do "cliente" no banco de dados (user > cliente.entity > barbearia.module)

    return user;
  }

  async findAll(): Promise<precos[]> { 
    const users = await this.precosRepository.find(); //aguardando e pegando todos os clientes 

    return users; //retornando resposta dos cadastros
  }
}
