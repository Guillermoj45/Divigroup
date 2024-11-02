package org.divigroup.divigroup.dto;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Getter;
import lombok.Setter;
import org.divigroup.divigroup.model.Producto;
import org.springframework.web.service.annotation.GetExchange;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class SoloProductoDTO {
    Integer id;
    String nombre;
    String descripcion;
    Float precio;
    String imagen;

    SoloProductoDTO(Producto producto){
        this.id = producto.getId();
        this.nombre = producto.getNombre();
        this.descripcion = producto.getDescripcion();
        this.precio = producto.getPrecio();
        this.imagen = producto.getImagen();
    }

    public static List<SoloProductoDTO> pasarALista(List<Producto> productos){
        List<SoloProductoDTO> lista = new ArrayList<>();
        for(Producto producto : productos){
            lista.add(new SoloProductoDTO(producto));
        }
        return lista;
    }


}
