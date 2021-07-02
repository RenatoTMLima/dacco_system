import { QueryRunner } from 'typeorm'

interface IMigration {
  [key: string]: Function
}

const migrations: IMigration = {
  createMigrationsTable: async (connection: QueryRunner): Promise<void> => {
    await connection.query(`CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY,
      migration TEXT NOT NULL UNIQUE
    );`)
  },

  createSalesTable: async (connection: QueryRunner): Promise<void> => {
    await connection.query(`CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY,
      nomeCliente TEXT NOT NULL,
      quantidadePecas INTEGER NOT NULL,
      formaPagamento TEXT NOT NULL,
      contatoCliente TEXT NOT NULL,
      valorTotal REAL NOT NULL,
      dataVenda TEXT NOT NULL
    );`)
  },

  createInvoiceTable: async (connection: QueryRunner): Promise<void> => {
    await connection.query(`CREATE TABLE IF NOT EXISTS invoice (
      id INTEGER PRIMARY KEY,
      dataVenda TEXT NOT NULL,
      horaVenda TEXT NOT NULL,
      nomeCliente TEXT NOT NULL
    );`)
  },

  createInvoiceProductsTable: async (connection: QueryRunner): Promise<void> => {
    await connection.query(`CREATE TABLE IF NOT EXISTS invoiceProducts (
      id INTEGER PRIMARY KEY,
      idProduto INTEGER NOT NULL,
      nomePeca TEXT NOT NULL,
      quantidade INTEGER NOT NULL,
      valor REAL NOT NULL
    );`)
  },
}

export default migrations