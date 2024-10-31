package org.divigroup.divigroup.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "producto", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Producto {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre", length = 100)
    String nombre;

    @Column(name = "descripcion", length = 400)
    String descripcion;

    @Column(name = "precio")
    private float precio;

    @Column(name = "imagen", unique = true, length = 200)
    private String imagen;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_users")
    private Usuario user;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_cuenta")
    private Cuenta cuenta;
}
