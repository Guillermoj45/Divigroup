package org.divigroup.divigroup.model;

import jakarta.persistence.*;
import lombok.*;
import org.divigroup.divigroup.model.enums.Rol;
import org.divigroup.divigroup.model.enums.TipoPago;
import org.hibernate.mapping.Set;

@Entity
@Table(name = "usuario", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Usuario {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "avatar", unique = true)
    private String avatar;

    @Column(name = "tipo_pago")
    @Enumerated(EnumType.ORDINAL)
    private TipoPago tipoPago;

    @Column(name = "rol")
    @Enumerated(EnumType.ORDINAL)
    private Rol rol;

    @Column(name = "password")
    private String password;

    @Column(name = "eliminado")
    private boolean eliminado;
}
