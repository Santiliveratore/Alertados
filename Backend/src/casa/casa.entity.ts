import { Entity, PrimaryKey, Property, ManyToOne, Unique } from '@mikro-orm/core';
import { Vecindario } from '../vecindario/vecindario.entity.js';

@Entity()
export class Casa {
  @PrimaryKey()
  id!: number;

  @Property()
  direccion!: string;

  @ManyToOne(() => Vecindario)
  vecindario!: Vecindario;

  @Property()
  capacidad!: number;

  @Property({ default: 1 })
  integrantesActuales!: number;

  @Property()
  @Unique()
  codigoCasa!: string;
}