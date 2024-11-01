package org.divigroup.divigroup.service;

import lombok.NoArgsConstructor;
import org.divigroup.divigroup.model.Producto;
import org.divigroup.divigroup.repository.IProductoRepository;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class ProductoService {
    IProductoRepository productoRepository;

    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }
}
