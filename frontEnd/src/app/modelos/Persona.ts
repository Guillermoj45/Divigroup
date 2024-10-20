import {Cuenta} from './Cuenta';

export class Persona {
  id: number;
  userName: string;
  avatar: string;
  cuentas: Array<Cuenta>;

  constructor(id: number, userName: string, avatar: string, cuentas?: Array<Cuenta>) {
    this.id = id;
    this.userName = userName;
    this.avatar = avatar;
    this.cuentas = cuentas || [];
  }


}
