import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Sale extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nomeCliente: string; 
  
  @Column('integer')
  quantidadePecas: number; 
  
  @Column('text')
  formaPagamento: string; 
  
  @Column('text')
  contatoCliente: string; 
  
  @Column('real')
  valorTotal: number; 
  
  @Column('text')
  dataVenda: string; 
}