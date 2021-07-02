import { ipcMain } from 'electron'
import { salesController } from './domain/sales/sales.controller'

export const registerListeners = () => {
  ipcMain.handle('registerSale', salesController.registerSale)
}