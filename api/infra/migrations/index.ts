import { createConnection, SimpleConsoleLogger } from 'typeorm'
import migrations from './migrations'
import { resolve } from 'path'

export const runMigrations = async (): Promise<void> => {
  const connection = await createConnection({
    type: "better-sqlite3",
    database: resolve(__dirname, "dacco.db"),
    synchronize: false
  })

  const queryRunner = connection.createQueryRunner()

  try{
    await queryRunner.connect()
    
    const migrationsTableExists = await queryRunner
      .query(`SELECT * FROM sqlite_master WHERE type='table' AND name='migrations';`)
    
    let migrationsDone = []
  
    if(migrationsTableExists.length > 0) {
      migrationsDone = await queryRunner.query(`SELECT migration FROM migrations;`)
    }
    
    for (const migration in migrations) {
      if(!migrationsDone.includes(migration)) {
        await migrations[migration](queryRunner)
  
        await queryRunner.manager.createQueryBuilder().insert().into('migrations').values({ migration }).execute()
      }
    }

  } catch(error) {
    console.log('ERRO', error)
  } finally {
    await queryRunner.release()
  }
}