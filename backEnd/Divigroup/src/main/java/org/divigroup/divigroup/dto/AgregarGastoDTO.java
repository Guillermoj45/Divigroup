package org.divigroup.divigroup.dto;

import lombok.Getter;
import lombok.Setter;
import org.divigroup.divigroup.model.Producto;

@Getter
@Setter
public class AgregarGastoDTO {
    private int idUsuario;
    private int idGrupo;
    private Producto producto;
}
