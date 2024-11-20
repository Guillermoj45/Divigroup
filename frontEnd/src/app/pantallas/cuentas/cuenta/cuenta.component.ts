import {
    Component,
    NgIterable,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
    AfterViewInit,
    ChangeDetectorRef, NgZone
} from '@angular/core';
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
import {TarjetaAmigoVotacionComponent} from "../../../tarjeta-amigo-votacion/tarjeta-amigo-votacion.component";

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
        RouterLink,
        TarjetaAmigoVotacionComponent
    ]
})

export class CuentaComponent implements OnInit, AfterViewInit {
    protected cuenta: Cuenta;
    segmento: string = 'cuentas';
    paraSeleccionar: boolean = false;
    listaMostrar:Persona[] = [];
    @ViewChildren(TarjetaAmigosComponent) tarjetaAmigosComponents!: QueryList<TarjetaAmigosComponent>;

    constructor(private cuentaService: CuentaService, private router:Router, private usuarioService: UsuarioService, private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {
        const navigation = this.router.getCurrentNavigation();
        this.cuenta = navigation?.extras.state?.['cuenta'];
        addIcons({ personOutline });
    }

    ngAfterViewInit(){
        this.cuentaService.getObtenerGastos(this.cuenta).subscribe((productos: Producto[]) => {
            this.cuenta.productos = productos;
        })


        this.tarjetaAmigosComponents.changes.subscribe(() => {
            if (this.tarjetaAmigosComponents.get(0)?.paraSeleccionar == false && this.tarjetaAmigosComponents.get(0)?.paraSeleccionar2 == false){
                this.puestaComun();
            }
            this.tarjetaAmigosComponents.forEach((tarjeta) => {

                for (let persona of this.cuenta.personas) {
                    if (tarjeta.persona.id === persona.id) {
                        tarjeta.setPersona(persona);
                    }
                }
            });
            this.changeDetectorRef.detectChanges();
        })
    }

    ngOnInit() {
        const navigation = this.router.getCurrentNavigation();
        this.cuenta = navigation?.extras.state?.['cuenta'];


        this.getPorPersona();
        console.log(this.cuenta);
        Cuenta.cuentaSaldo(this.cuenta);
        this.puestaComun();
        this.listaMostrar = this.cuenta.personas;

        this.paraSeleccionar = false;
    }

    seleccionarAmigo() {
        this.paraSeleccionar = !this.paraSeleccionar;
        if (this.paraSeleccionar) {


            this.usuarioService.getAmigos().subscribe((amigos) => {
                this.ngZone.run(() => {
                    amigos.forEach((persona) => {
                        for (let amigo of this.cuenta.personas) {
                            if (persona.id === amigo.id) {
                                console.log(persona.id + " " + amigo.id);
                                persona.seleccionado = true;
                            }
                        }
                    });
                    this.listaMostrar = amigos;
                    console.log("lista amigos", this.listaMostrar);
                    this.changeDetectorRef.detectChanges(); // Forzar la detección de cambios
                });
            });
        } else {
            this.ngZone.run(() => {
                this.listaMostrar = this.cuenta.personas;
                this.changeDetectorRef.detectChanges(); // Forzar la detección de cambios
            });
        }
    }

    alterado(persona:Persona){
        if (persona.seleccionado){
            this.cuentaService.agregarPersona(this.cuenta,persona).subscribe((cuenta) => {
                console.log("hola", cuenta);
                this.cuenta.personas.push(persona);
                console.log("Persona agregada");
            });
        } else {
            console.log(persona)
            this.cuentaService.eliminarPersona(this.cuenta,persona).subscribe((cuenta) => {
                console.log("hola", cuenta);
                this.cuenta.personas = this.cuenta.personas.filter((p) => p.id !== persona.id);
                console.log("Persona eliminada");
            });
        }
    }

    onSegmentChange(event: any) {
        this.segmento = event.detail.value;
        if (this.segmento === 'personas'){
            this.listaMostrar = this.cuenta.personas;
            this.paraSeleccionar = false;
        }
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
        console.log(this.cuenta.personas);
        if (this.cuenta.personas == undefined){
            this.usuarioService.getUsuariosCuenta(this.cuenta.id!).subscribe((personas:any) => {
                this.cuenta.personas = personas.participantes;
            });
        }
        this.cuentaService.getPuestaComun(this.cuenta.id!).subscribe((cuenta) => {
            console.log("Llega la puesta en comun", cuenta, this.cuenta.personas);
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

