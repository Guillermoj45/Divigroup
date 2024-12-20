package org.divigroup.divigroup.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "El nombre de usuario no puede estar vacío")
    @Column(name = "username", unique = true)
    private String username;

    @Email(message = "Email no válido")
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

    @NotBlank(message = "La contraseña no puede estar vacía")
    @Column(name = "password")
    @JsonIgnore
    private String password;

    @Column(name = "eliminado")
    @JsonIgnore
    private boolean eliminado;

    public Usuario(Usuario usuario){
        this.id = usuario.getId();
        this.username = usuario.getUsername();
        this.email = usuario.getEmail();
        this.avatar = usuario.getAvatar();
        this.tipoPago = usuario.getTipoPago();
        this.rol = usuario.getRol();
    }
}
