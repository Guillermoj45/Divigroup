import {Cuenta} from './Cuenta';

export class Persona {
    id: number = 0;
    username: string = "";
    avatar: string = "";
    rol: string = "";
    email: string = "";
    cuentas: Cuenta[] = [];
    deuda?: number;

    constructor(id: number, userName: string, avatar: string) {
        this.id = id;
        this.username = userName;
        this.avatar = avatar;
    }
}
