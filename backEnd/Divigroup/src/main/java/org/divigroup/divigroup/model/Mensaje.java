package org.divigroup.divigroup.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Mensaje {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "mensaje")
    String mensaje;

    @Column(name = "fecha")
    LocalDateTime fecha;

    @ManyToOne
    @JoinColumn(name = "id_chat_user")
    ChatUser chatUser;
}
