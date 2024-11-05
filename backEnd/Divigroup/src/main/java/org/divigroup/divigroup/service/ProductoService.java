package org.divigroup.divigroup.service;

import lombok.NoArgsConstructor;
import org.divigroup.divigroup.dto.SoloProductoDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.HistorialPago;
import org.divigroup.divigroup.model.Producto;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.metadata.HikariDataSourcePoolMetadata;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

/**
 * Clase que se encarga de la logica de negocio de los productos
 */
@Service
@NoArgsConstructor
public class ProductoService {
    @Autowired
    IProductoRepository productoRepository;

    @Autowired
    CuentaService cuentaService;

    @Autowired
    HistorialPagoService historialPagoService;

    /**
     * Método que se encarga de crear un producto
     * @param producto producto a crear
     * @return producto creado
     */
    public Producto crearProducto(Producto producto){
        return productoRepository.save(producto);
    }

    /**
     * Método que se encarga de encontrar un producto por su id
     * @param idCuenta id del producto
     * @return producto encontrado
     */
    public List<SoloProductoDTO> encontrarPorCuenta(int idCuenta) {
        Cuenta cuenta = cuentaService.buscarCuentaId(idCuenta);
        List<Producto> listaProducto = productoRepository.encontrarPorCuenta(cuenta);
        return SoloProductoDTO.pasarALista(listaProducto);
    }

    /**
     * Método que se encarga de encontrar un producto por su id
     * @param idGrupo id del producto
     * @return producto encontrado
     */
    public HashMap<String, Float> puestaEnCuentas (int idGrupo) {
        Cuenta cuenta = cuentaService.buscarCuentaId(idGrupo);
        List<Usuario> participantes = cuentaService.listaParticipantes(idGrupo).getParticipantes();
        HashMap<String, List<SoloProductoDTO>> gastos = new HashMap<>();

        for (Usuario u : participantes){
            gastos.put(u.getUsername(), new ArrayList<>());
        }

        List<Producto> listaProducto = productoRepository.encontrarPorCuenta(cuenta);
        for (Producto p : listaProducto){
            SoloProductoDTO dto = new SoloProductoDTO(p);
            gastos.get(p.getUser().getUsername()).add(dto);
        }
        HashMap<String, Float> suma = new HashMap<>();

        for (String u : gastos.keySet()){
            Float total = 0.0F;
            for (SoloProductoDTO p : gastos.get(u)){
                total += p.getPrecio();
            }
            suma.put(u, total);
        }

        Float total = 0.0F;
        for (String u : suma.keySet()){
            System.out.println(u + ": " + suma.get(u));
            total += suma.get(u);
            System.out.println("Total: " + total);
        }
        total = Float.parseFloat(String.format("%.2f", total).replace(",", "."));
        System.out.println("Total: " + total);

        float totalPorPersona = total / participantes.size();
        suma.forEach((k, v) -> {
            suma.put(k, Float.parseFloat(String.format("%.2f", v - totalPorPersona).replace(",", ".")));
        });

        List<HistorialPago> historial = historialPagoService.encontrarPorCuenta(cuenta);
        Float totalHistorial = 0.0F;
        for (HistorialPago h : historial){
            String nombreUsuario = h.getUsuario().getUsername();
            totalHistorial += h.getMonton();
            suma.put(nombreUsuario,Float.parseFloat(String.format("%.2f", suma.get(nombreUsuario) + h.getMonton()).replace(",", ".")));
        }

        for (String u : suma.keySet()){
            if (suma.get(u) > 0){
                Float resta = suma.get(u) - totalHistorial;
                resta = Float.parseFloat(String.format("%.2f", resta).replace(",", "."));

                if (resta < 0){
                    totalHistorial = Math.abs(resta);
                    suma.put(u, 0.0F);
                } else {
                    suma.put(u, resta);

                }
            }
        }

        return suma;
    }
}
