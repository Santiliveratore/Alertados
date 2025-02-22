import { Entity, PrimaryKey, Property, ManyToOne,} from '@mikro-orm/core';
import { Casa } from '../casa/casa.entity.js';

@Entity()
export class Suscripcion {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Casa)
  casa!: Casa;

  @Property()
  fechaInicio!: Date;

  @Property()
  fechaFin!: Date;

  @Property()
  monto!: number;

  @Property()
  estado!: string;
}