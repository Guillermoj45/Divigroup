package org.divigroup.divigroup.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "datos_personales", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DatosPersonales {
    @Id
    @Column(name = "id")
    private int id;

    @OneToOne(cascade = CascadeType.PERSIST)
    @PrimaryKeyJoinColumn
    private Usuario usuario;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "primer_apellido")
    private String primerApellido;

    @Column(name = "segundo_apellido")
    private String segundoApellido;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "direccion")
    private String direccion;

}
