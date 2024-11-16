import {Component, NgIterable, OnInit, ViewChild} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Cuenta} from "../../../modelos/Cuenta";
import {NgForOf, NgIf} from "@angular/common";
import {TajetaCuentaComponent} from "../../../tarjetas/tajeta-cuenta/tajeta-cuenta.component";
import {AmigoComponent} from "../../amigo/amigo.component";
import {MenuTarjetaAmigosComponent} from "../../../tarjetas/menu-tarjeta-amigos/menu-tarjeta-amigos.component";
import {TarjetaAmigosComponent} from "../../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {Producto} from "../../../modelos/Producto";
import {ProductoComponent} from "../../../tarjetas/producto/producto.component";
import {BotonAgregarComponent} from "../../../componentes/boton-agregar/boton-agregar.component";
import {Router, RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";
import {CuentaService} from "../../../service/cuenta.service";
import {addIcons} from "ionicons";
import {personOutline} from "ionicons/icons";
import {UsuarioService} from "../../../service/usuario.service";
import {Persona} from "../../../modelos/Persona";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-cuenta',
    templateUrl: './cuenta.component.html',
    styleUrls: ['./cuenta.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgIf,
        TajetaCuentaComponent,
        AmigoComponent,
        MenuTarjetaAmigosComponent,
        TarjetaAmigosComponent,
        NgForOf,
        ProductoComponent,
        FooterComponent,
        BotonAgregarComponent,
        RouterLink
    ]
})
export class CuentaComponent implements OnInit {
    protected cuenta: Cuenta;
    segmento: string = 'cuentas';
    paraSeleccionar: boolean = false;
    listaMostrar:Persona[] = [];


    constructor(private cuentaService: CuentaService, private router:Router, private usuarioService: UsuarioService) {
        const navigation = this.router.getCurrentNavigation();
        this.cuenta = navigation?.extras.state?.['cuenta'];


    }

    ngOnInit() {
        const navigation = this.router.getCurrentNavigation();
        this.cuenta = navigation?.extras.state?.['cuenta'];

         this.cuentaService.getObtenerGastos(this.cuenta).subscribe((productos: Producto[]) => {
            this.cuenta.productos = productos;
            this.getPorPersona();
            Cuenta.cuentaSaldo(this.cuenta);
            this.puestaComun();
            this.listaMostrar = this.cuenta.personas;
            console.log(this.cuenta);
         });
        this.paraSeleccionar = false;
        addIcons({ personOutline });
    }

    seleccionarAmigo() {
        this.paraSeleccionar = !this.paraSeleccionar;
        if (this.paraSeleccionar) {
            this.usuarioService.getAmigos().subscribe((amigos) => {
                this.listaMostrar = amigos;
                amigos.forEach((persona) => {
                    for (let amigo of this.cuenta.personas) {
                        if (persona.id === amigo.id) {
                            console.log(persona.id + " " + amigo.id);
                            persona.seleccionado = true;
                        }
                    }
                });
            });
        } else {
            this.listaMostrar = this.cuenta.personas;
        }
    }

    alterado(persona:Persona){
        if (persona.seleccionado){
            this.cuentaService.agregarPersona(this.cuenta,persona).subscribe((cuenta) => {
                this.cuenta.personas.push(persona);
                this.listaMostrar = cuenta.personas;
                console.log("Persona agregada");
            });
        } else {
            console.log(persona)
            this.cuentaService.eliminarPersona(this.cuenta,persona).subscribe((cuenta) => {
                this.cuenta.personas = this.cuenta.personas.filter((p) => p.id !== persona.id);
                this.listaMostrar = cuenta.personas;
                console.log("Persona eliminada");
            });
        }
    }

    onSegmentChange(event: any) {
        this.segmento = event.detail.value;
    }

    getTotal() {
        return this.cuenta.saldo;
    }

    getPorPersona() {
        let total: number = this.getTotal();
        let personas: number = this.cuenta.personas?.length || 1;
        this.cuenta.porPersona = (total / personas).toFixed(2);
    }

    puestaComun(){
        this.cuentaService.getPuestaComun(this.cuenta.id??0).subscribe((cuenta) => {
            for (let persona of this.cuenta.personas){
                persona.deuda = cuenta[persona.username];
            }
        });
        console.log("Puesta en comun ejecutada")
    }
    agregarProducto(){
        this.router.navigate(['/producto/crear'], {state: {cuenta: this.cuenta}});
    }

}

