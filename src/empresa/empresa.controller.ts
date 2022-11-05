import { Controller, Get, Post, Req, Res, Param, Put, Patch, Delete, Body } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { Empresa } from './empresa.entity';
import { EmpresaService } from './empresa.service';

@Controller('/barbearias') //aqui estamos mapeando a rota de controle
class EmpresaController {
  constructor(private readonly service: EmpresaService) {}

  @Post('/cadastrar')
  async create(@Req() request: Request, @Res() response: Response) { //quando o a requisição do create for feita vai ser encaminhada ao "cliente.service"
    const { nomebarbearia, nomefuncionario } = request.body;

    const user = await this.service.create({  nomebarbearia, nomefuncionario }); //await = está aguardando o retorno do "cliente.service" da requisição create ser concluida

    return response.json(user).send();// vai retornar uma resposta com os dados cadastrados
  }

  @Get('/cadastros')
  async findAll(@Res() response: Response) { //procurando todos os cadastros
    const user = await this.service.findAll(); //aguardando retorno

    return response.json(user).send(); //enviando resposta dos clientes
  }

  @Put('/:id')
  async update(@Res() response: Response, @Req() request : Request) {
    const { id } = request.params;
    const {nomebarbearia, nomefuncionario } = request.body;
    const temp = await this.service.update(Number(id), {nomebarbearia, nomefuncionario});

    return response.json(temp).send();
  }

  @Patch('/:id')
  async updateNomepadaria(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const {nomebarbearia, nomefuncionario} = request.body;
    const atualizarpacote = await this.service.updateNomepadaria(Number(id), {nomebarbearia, nomefuncionario});

    return response.json(atualizarpacote).send();
  }

  @Patch('/:id')
  async updateFuncionario(@Req() request: Request, @Res() response: Response) {
    const { id } = request.params;
    const {nomebarbearia, nomefuncionario} = request.body;
    const atualizarpacote = await this.service.updateFuncionario(Number(id), {nomebarbearia, nomefuncionario});

    return response.json(atualizarpacote).send();
  }
  
  @Delete('/:id')
  async delete(@Param('id') id: number, @Res() response: Response) {
    await this.service.delete(id);

    return response.json(id).send();
  }

}

export { EmpresaController };
