package org.divigroup.divigroup.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cuenta", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Cuenta {
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
