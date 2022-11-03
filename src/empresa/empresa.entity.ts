import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


// aqui é onde a entidade é criada, tendo suas variaveis as mesmas do banco de dados

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomebarbearia: string;

  @Column()
  nomefuncionario: string;


  @Column({ default: true })
  isActive: boolean;
}
