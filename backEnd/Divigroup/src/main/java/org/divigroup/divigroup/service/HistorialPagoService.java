package org.divigroup.divigroup.service;

import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.HistorialPago;
import org.divigroup.divigroup.repository.IHistorialPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HistorialPagoService {
    @Autowired
    private IHistorialPagoRepository historialPagoRepository;

    @Autowired
    private CuentaService cuentaService;

    /**
     * Método que se encarga de encontrar un historial de pago por su cuenta
     * @param cuenta cuenta a buscar
     * @return historial de pago encontrado
     */
    public List<HistorialPago> encontrarPorCuenta(Cuenta cuenta) {
        return historialPagoRepository.encontrarPorCuenta(cuenta);
    }

    /**
     * Método que se encarga de guardar un historial de pago
     * @param historialPago historial de pago a guardar
     * @return historial de pago guardado
     */
    public HistorialPago guardar(HistorialPago historialPago) {
        return historialPagoRepository.save(historialPago);
    }

}
