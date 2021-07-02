import { CreateSaleDTO } from "../dtos/createSale.dto";
import { SalesRepository } from '../database/repositories/sales.repository'
import { Sale } from '../database/entities/sales.entity'

export const registerSale = async (newSale: CreateSaleDTO): Promise<Sale> => {
  const salesRepository = new SalesRepository()

  const savedNewSale = await salesRepository.createSale(newSale)

  return savedNewSale
}