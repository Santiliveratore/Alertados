import { Entity, PrimaryKey, Property,ManyToOne,} from '@mikro-orm/core';
import { Usuario } from '../usuario/usuario.entity.js';

@Entity()
export class Alarma {
    @PrimaryKey()
    id!: number;
  
    @ManyToOne(() => Usuario)
    usuario!: Usuario;
  
    @Property({ defaultRaw: 'CURRENT_TIMESTAMP' })
    fechaActivacion!: Date;
  
    @Property()
    motivo!: string;
  }
  