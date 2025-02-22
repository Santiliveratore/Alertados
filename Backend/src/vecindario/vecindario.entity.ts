import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class Vecindario {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  @Unique()
  codigoAcceso!: string;

  @Property({ defaultRaw: 'CURRENT_TIMESTAMP' })
  creadoEn!: Date;
}