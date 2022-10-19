import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


// aqui é onde a entidade é criada, tendo suas variaveis as mesmas do banco de dados

@Entity()
export class precos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomecorte: string;

  @Column()
  valorcorte: number;

  @Column({ default: true })
  isActive: boolean;
}
