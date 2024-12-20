package org.divigroup.divigroup.dto;

import lombok.*;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GrupoListaParticipantesDTO {
    private Cuenta cuenta;
    private Set<Usuario> participantes;
}
