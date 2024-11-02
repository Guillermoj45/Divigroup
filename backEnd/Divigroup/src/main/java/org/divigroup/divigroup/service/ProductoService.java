package org.divigroup.divigroup.service;

import lombok.NoArgsConstructor;
import org.divigroup.divigroup.dto.SoloProductoDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Producto;
import org.divigroup.divigroup.repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
public class ProductoService {
    @Autowired
    IProductoRepository productoRepository;

    @Autowired
    CuentaService cuentaService;

    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public List<SoloProductoDTO> encontrarPorCuenta(int idCuenta) {
        Cuenta cuenta = cuentaService.buscarCuentaId(idCuenta);
        List<Producto> listaProducto = productoRepository.encontrarPorCuenta(cuenta);
        return SoloProductoDTO.pasarALista(listaProducto);
    }
}
