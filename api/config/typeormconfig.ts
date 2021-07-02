import { ConnectionOptions } from 'typeorm'
import { resolve } from 'path'

export const typeormconfig: ConnectionOptions = {
  type: "better-sqlite3",
  database: resolve(__dirname, "dacco.db"),
  entities: [resolve(__dirname, 'api', 'domain', '**', 'database', 'entities', '*.entity{.ts,.js}')],
  synchronize: false
}