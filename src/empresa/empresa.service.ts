import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';


interface Request { // quando houver alguma requisição tais dados dentro de interface serão apresentados
    nomebarbearia: string;
    nomefuncionario: number;
    horariodefuncionamento: number;
}

//aqui é um construtor otimizado, sendo ele a setagem de valores, exemplo = "this.nome = nome;"
@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private EmpresaRepository: Repository<Empresa>, //o repositorio é a classe cliente dentro de "entity"
  ) {}

  //async é uma tarefa assincrona, tendo como função executar tudo e retornar uma resposta

  async create({ nomebarbearia, nomefuncionario, horariodefuncionamento }: Request): Promise<Empresa> { //pegando a requisição create feita no "cliente.controller"
    // quando os dados forem preenchidos, serão passados para "user"
    const user = await this.EmpresaRepository.create({ 
      nomebarbearia,
      nomefuncionario,
      horariodefuncionamento,
    });

    await this.EmpresaRepository.save(user); //salvando os dados do "cliente" no banco de dados (user > cliente.entity > barbearia.module)

    return user;
  }

  async findAll(): Promise<Empresa[]> { 
    const users = await this.EmpresaRepository.find(); //aguardando e pegando todos os clientes 

    return users; //retornando resposta dos cadastros
  }

  async update(id): Promise<Empresa[]>{
    const tmp = await this.EmpresaRepository.update

    return tmp;
}
