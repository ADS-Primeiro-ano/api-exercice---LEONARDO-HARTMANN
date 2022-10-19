import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ClienteService } from './cliente.service';




@Controller({host: 'aondeeuencontro.com'}) //aqui estamos mapeando a rota de controle
class ClientesController {
  constructor(private readonly service: ClienteService) {}

  @Post('/barbearias/cadastrar')
  async create(@Req() request: Request, @Res() response: Response) { //quando o a requisição do create for feita vai ser encaminhada ao "cliente.service"
    const { nomecliente, idadecliente, horaagendada } = request.body;

    const user = await this.service.create({  nomecliente, idadecliente, horaagendada }); //await = está aguardando o retorno do "cliente.service" da requisição create ser concluida

    return response.json(user).send("Cadastrado! - 201");// vai retornar uma resposta com os dados cadastrados
  }

  @Get('/cadastros')
  async findAll(@Res() response: Response) { //procurando todos os cadastros
    const user = await this.service.findAll(); //aguardando retorno

    return response.json(user).send(); //enviando resposta dos clientes
  }
}

export { ClientesController };
