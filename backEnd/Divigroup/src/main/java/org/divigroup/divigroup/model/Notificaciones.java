package org.divigroup.divigroup.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "notificaciones", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Notificaciones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "mensaje")
    private String mensaje;

    @Column(name = "visto")
    private boolean visto;

    @JoinColumn(name = "users_id")
    @ManyToOne
    private Usuarios usuario;
}
