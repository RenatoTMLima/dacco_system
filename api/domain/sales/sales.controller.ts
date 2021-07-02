import { registerSale } from './services/registerSale.service'
import { CreateSaleDTO } from './dtos/createSale.dto'
import { Sale } from './database/entities/sales.entity'

export const salesController = {
  registerSale: (_, newSale: CreateSaleDTO): Promise<Sale> => {
    return registerSale(newSale)
  }
}