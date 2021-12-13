import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Experience extends BaseSchema {
  protected tableName = 'Experience'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().notNullable()
      table.integer('candidate_id').references('id').inTable('Candidate').onDelete('CASCADE')
      table.integer('skill_id').references('id').inTable('Skill').onDelete('CASCADE')
      table.integer('nivel').notNullable()


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
