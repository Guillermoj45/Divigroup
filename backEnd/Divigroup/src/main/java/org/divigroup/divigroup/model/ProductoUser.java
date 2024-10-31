package org.divigroup.divigroup.model;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "producto_user", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ProductoUser {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_user")
    private Usuario usuario;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_producto")
    private Producto producto;

    @Column(name = "pagado")
    private boolean pagado;

    @Column(name = "fecha")
    private LocalDate fecha;
}
