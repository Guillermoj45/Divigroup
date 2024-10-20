package org.divigroup.divigroup.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cuentas", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cuentas {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre", length = 20)
    String nombre;

    @Column(name = "descripcion", length = 400)
    String descripcion;

    @Column(name = "imagen", unique = true, length = 200)
    String imagen;

    @Column(name = "imagenfondo", unique = true, length = 200)
    String imagenfondo;
}
