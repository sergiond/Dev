import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Experience from './Experience'

export default class Candidate extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_completo: string

  @column()
  public email: string
  
  @column()
  public telefono: string

  @column.dateTime()
  public fecha_nacimiento: DateTime

  @column()
  public salario_actual: Number

  @column()
  public salario_deseado: Number

  @column()
  public localidad: string

  @column()
  public pais: string

  @column()
  public remoto: boolean

  @column()
  public movilidad_geografica: boolean

  @column()
  public activo: boolean

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
  
  @hasMany(() => Experience)
  public experience: HasMany<typeof Experience>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
