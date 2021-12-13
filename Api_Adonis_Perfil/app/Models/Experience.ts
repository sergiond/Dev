import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column,} from '@ioc:Adonis/Lucid/Orm'
import Candidate from './Candidate'
import Skill from './Skill'

export default class Experience extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Candidate)
  public candidate_id: BelongsTo<typeof Candidate>

  @belongsTo(() => Skill)
  public skill_id: BelongsTo<typeof Skill>

  @column()
  public nivel: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
