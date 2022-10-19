import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


// aqui é onde a entidade é criada, tendo suas variaveis as mesmas do banco de dados

@Entity()
export class cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomecliente: string;

  @Column()
  idadecliente: number;

  @Column()
  horaagendada: number;

  @Column({ default: true })
  isActive: boolean;
}
