import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Producto} from "../../../modelos/Producto";
import {camera, clipboardOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {TarjetaAmigosComponent} from "../../../tarjetas/tarjeta-amigos/tarjeta-amigos.component";
import {NgForOf, NgIf} from "@angular/common";
import {Persona} from "../../../modelos/Persona";
import {Router, RouterLink} from "@angular/router";
import {FooterComponent} from "../../../componentes/footer/footer.component";
import {state} from "@angular/animations";
import {Cuenta} from "../../../modelos/Cuenta";
import {ProductoService} from "../../../service/producto.service";
import {UsuarioService} from "../../../service/usuario.service";
import {CuentaService} from "../../../service/cuenta.service";

@Component({
    selector: 'app-agregar-producto',
    templateUrl: './agregar-producto.component.html',
    styleUrls: ['./agregar-producto.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        TarjetaAmigosComponent,
        NgForOf,
        FooterComponent,
        NgIf,
        RouterLink
    ]
})
export class AgregarProductoComponent implements OnInit {
    cuenta:Cuenta = new Cuenta();
    producto: Producto = new Producto('https://picsum.photos/800/800?random=1', '', 0, new Date());
    invitados: Persona[] = [];


    constructor(private router:Router, private productoService: ProductoService, private cuentaService: CuentaService) {
        addIcons({camera, clipboardOutline})
    }

    ngOnInit(){
        const navigation = this.router.getCurrentNavigation();
        this.cuenta = navigation?.extras.state?.['cuenta'];
        this.producto = new Producto('https://picsum.photos/800/800?random=1', '', 0, new Date());
        // this.usuarioService.getUsuariosCuenta(this.cuenta.id!).subscribe((amigos:Persona[]) => {
        //     this.invitados = amigos;
        //     this.invitados.forEach((invitado) => {
        //         invitado.seleccionado = false;
        //     })
        // })
    }

    agregarArchivo(event: Event) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        fileInput.onchange = this.onFileSelected.bind(this);
        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            console.log('Selected file:', file);
        }
    }

    agregarImagen(event: Event) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        fileInput.onchange = this.onImageSelected.bind(this);
        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
    }

    onImageSelected(event: Event) {

        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            if (this.producto.imagen != null) {
                this.producto.imagen = URL.createObjectURL(file).toString();
                console.log(URL.createObjectURL(file).toString())
            }
        }
    }

    agregarProducto(){
        console.log({
            "Producto agregado": this.producto,
            "Cuenta": this.cuenta
            });
        this.productoService.pushProducto(this.cuenta, this.producto);
        this.router.navigate(['/cuentas/cuenta'], {state: {cuenta: this.cuenta}});
        this.puestaComun();
    }
    puestaComun(){
        this.cuentaService.getPuestaComun(this.cuenta.id??0).subscribe((cuenta) => {
            for (let persona of this.cuenta.personas){
                persona.deuda = cuenta[persona.username];
            }
        });
        console.log("Puesta en comun ejecutada")
    }
}
