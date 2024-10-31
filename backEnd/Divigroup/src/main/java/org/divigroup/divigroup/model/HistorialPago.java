package org.divigroup.divigroup.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.divigroup.divigroup.model.enums.TipoPago;

@Entity
@Table(name = "historial_pago", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HistorialPago {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "tipo_pago")
    @Enumerated(EnumType.ORDINAL)
    private TipoPago tipoPago;

    @JoinColumn(name = "id_users")
    @ManyToOne
    private Usuario usuario;

    @JoinColumn(name = "id_producto")
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Producto producto;
}
