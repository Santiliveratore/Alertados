import { Entity, PrimaryKey, Property, ManyToOne, Unique } from '@mikro-orm/core';
import { Casa } from '../casa/casa.entity.js';
import { Pais } from '../pais/pais.entity.js';

@Entity()
export class Usuario {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  apellido!: string;

  @Property()
  @Unique()
  email!: string;

  @Property()
  passwordHash!: string;

  @Property({ default: false })
  suscripcionActiva!: boolean;

  @ManyToOne(() => Casa, { nullable: true })
  casa?: Casa;

  @ManyToOne(() => Pais, { nullable: true })
  pais?: Pais;

  @Property({ default: false })
  esAdministrador!: boolean;

  @Property({ defaultRaw: 'CURRENT_TIMESTAMP' })
  creadoEn!: Date;
}