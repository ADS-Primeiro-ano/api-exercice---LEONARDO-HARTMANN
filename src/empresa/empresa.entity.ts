import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


// aqui é onde a entidade é criada, tendo suas variaveis as mesmas do banco de dados

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomebarbearia: string;

  @Column()
  nomefuncionario: number;

  @Column()
  horariodefuncionamento: number;

  @Column({ default: true })
  isActive: boolean;
}
