import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { cliente } from './cliente.entity';

interface Request { // quando houver alguma requisição tais dados dentro de interface serão apresentados
    nomecliente: string;
    idadecliente: number;
    horaagendada: number;
}

//aqui é um construtor otimizado, sendo ele a setagem de valores, exemplo = "this.nome = nome;"
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(cliente)
    private clientesRepository: Repository<cliente>, //o repositorio é a classe cliente dentro de "entity"
  ) {}

  //async é uma tarefa assincrona, tendo como função executar tudo e retornar uma resposta

  async create({ nomecliente, idadecliente, horaagendada }: Request): Promise<cliente> { //pegando a requisição create feita no "cliente.controller"
    // quando os dados forem preenchidos, serão passados para "user"
    const user = await this.clientesRepository.create({ 
      nomecliente,
      idadecliente,
      horaagendada,
    });

    await this.clientesRepository.save(user); //salvando os dados do "cliente" no banco de dados (user > cliente.entity > barbearia.module)

    return user;
  }

  async findAll(): Promise<cliente[]> { 
    const users = await this.clientesRepository.find(); //aguardando e pegando todos os clientes 

    return users; //retornando resposta dos cadastros
  }
}
