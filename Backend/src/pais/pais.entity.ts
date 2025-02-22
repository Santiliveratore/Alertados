import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class Pais {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  @Unique()
  codigoIso!: string;
}