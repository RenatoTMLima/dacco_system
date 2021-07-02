import { contextBridge, ipcRenderer } from 'electron'
import { CreateSaleDTO } from '../api/domain/sales/dtos/createSale.dto'

export const api = {
  registerSale: async (newSale: CreateSaleDTO) => {
    return ipcRenderer.invoke('registerSale', newSale)
  }
}

contextBridge.exposeInMainWorld('Api', api)
