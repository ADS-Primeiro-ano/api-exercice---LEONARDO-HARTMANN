import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';


interface Request { // quando houver alguma requisição tais dados dentro de interface serão apresentados
    nomebarbearia: string;
    nomefuncionario: string;
}

//aqui é um construtor otimizado, sendo ele a setagem de valores, exemplo = "this.nome = nome;"
@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>, //o repositorio é a classe cliente dentro de "entity"
  ) {}

  //async é uma tarefa assincrona, tendo como função executar tudo e retornar uma resposta

  async create({ nomebarbearia, nomefuncionario }: Request): Promise<Empresa> { //pegando a requisição create feita no "cliente.controller"
    // quando os dados forem preenchidos, serão passados para "user"
    const user = await this.empresaRepository.create({ 
      nomebarbearia,
      nomefuncionario,
    });

    await this.empresaRepository.save(user); //salvando os dados do "cliente" no banco de dados (user > cliente.entity > barbearia.module)

    return user;
  }

  async findAll(): Promise<Empresa[]> { 
    const users = await this.empresaRepository.find(); //aguardando e pegando todos os clientes 

    return users; //retornando resposta dos cadastros
  }

  async update(id: number, body) {
    const atualizar = await this.empresaRepository.update(id, body);

    return atualizar;
  }

  async delete(id: number){
    const deletar = await this.empresaRepository.delete(id);

    return deletar;
  }

  async updatePatch(id: number, request: Request) {
    const atualizarpacote = await this.empresaRepository.update(id, request);

    return atualizarpacote;

  }

}
