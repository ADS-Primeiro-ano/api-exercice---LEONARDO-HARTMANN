import { Controller, Get, Post, Req, Res, Param, Put, Patch, Delete, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { EmpresaService } from './empresa.service';





@Controller({host: 'aondeeuencontro.com'}) //aqui estamos mapeando a rota de controle
class EmpresaController {
  constructor(private readonly service: EmpresaService) {}

  @Post('/barbearias/cadastrar')
  async create(@Req() request: Request, @Res() response: Response) { //quando o a requisição do create for feita vai ser encaminhada ao "cliente.service"
    const { nomebarbearia, nomefuncionario, horariodefuncionamento } = request.body;

    const user = await this.service.create({  nomebarbearia, nomefuncionario, horariodefuncionamento }); //await = está aguardando o retorno do "cliente.service" da requisição create ser concluida

    return response.json(user).send("Cadastrado! - 201");// vai retornar uma resposta com os dados cadastrados
  }

  @Get('/cadastros')
  async findAll(@Res() response: Response) { //procurando todos os cadastros
    const user = await this.service.findAll(); //aguardando retorno

    return response.json(user).send(); //enviando resposta dos clientes
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body()Body) {
    const tmp = await Body();

    return response.json(tmp).send("");
  }

  @Patch()


  @Delete(':id')
  remove(@Req('id') id: number) {
    return `This action removes a #${id} cat`;
  }
  
}

export { EmpresaController };
