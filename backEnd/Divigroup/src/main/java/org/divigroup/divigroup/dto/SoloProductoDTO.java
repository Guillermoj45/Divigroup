package org.divigroup.divigroup.dto;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.divigroup.divigroup.model.Producto;
import org.springframework.web.service.annotation.GetExchange;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class SoloProductoDTO {
    Integer id;
    String nombre;
    String descripcion;
    Float precio;
    String imagen;
    String nombre_usuario;
    String fecha;

    public SoloProductoDTO(Producto producto){
        this.id = producto.getId();
        this.nombre = producto.getNombre();
        this.descripcion = producto.getDescripcion();
        this.precio = producto.getPrecio();
        this.imagen = producto.getImagen();
        this.nombre_usuario = producto.getUser().getUsername();
        this.fecha = producto.getFecha().format(DateTimeFormatter.ofPattern("HH:mm"));
    }

    public static List<SoloProductoDTO> pasarALista(List<Producto> productos){
        List<SoloProductoDTO> lista = new ArrayList<>();
        for(Producto producto : productos){
            lista.add(new SoloProductoDTO(producto));
        }
        return lista;
    }


}
