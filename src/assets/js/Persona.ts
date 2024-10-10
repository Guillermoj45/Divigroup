import { Cuenta } from './Cuenta';
export class Persona {
  id: number;
  userName: string;
  cuentas: Array<Cuenta>;

  constructor(id: number, userName: string, cuentas?: Array<Cuenta>) {
    this.id = id;
    this.userName = userName;
    this.cuentas = cuentas || [];
  }


}
