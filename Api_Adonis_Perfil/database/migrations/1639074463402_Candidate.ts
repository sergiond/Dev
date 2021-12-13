import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Candidate extends BaseSchema {
  protected tableName = 'Candidate'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unique().notNullable()
      table.string('nombre_completo').notNullable()
      table.string('email').notNullable().unique()
      table.string('telefono').notNullable().unique()
      table.dateTime('fecha_nacimiento').notNullable()
      table.integer('salario_actual').notNullable()
      table.integer('salario_deseado').notNullable()
      table.string('localidad').notNullable()
      table.string('pais').notNullable()
      table.boolean('remoto').notNullable().defaultTo(true)
      table.boolean('movilidad_geografica').notNullable().defaultTo(false)
      table.boolean('activo').notNullable().defaultTo(true)
      table.integer('user_id').references('id').inTable('User').onDelete('CASCADE')
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
