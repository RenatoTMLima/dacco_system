import { EntityRepository, Repository } from 'typeorm'
import { Sale } from '../entities/sales.entity'
import { CreateSaleDTO } from '../../dtos/createSale.dto'

@EntityRepository(Sale)
export class SalesRepository extends Repository<Sale> {
  async createSale(newSale: CreateSaleDTO): Promise<Sale> {
    const createdSale = this.create(newSale)

    return createdSale.save()
  }
}