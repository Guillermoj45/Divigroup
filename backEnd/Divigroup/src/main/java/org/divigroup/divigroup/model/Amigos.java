package org.divigroup.divigroup.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "amigos", schema = "divigroup")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Amigos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario1")
    private Usuarios user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario2")
    private Usuarios amigo;

    @Column(name = "confimado")
    private boolean confirmado;
}
