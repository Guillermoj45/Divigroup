package org.divigroup.divigroup.serviceMokito;

import jakarta.transaction.Transactional;
import org.divigroup.divigroup.dto.AgregarCuentaDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.HistorialPago;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.service.CuentaService;
import org.divigroup.divigroup.service.HistorialPagoService;
import org.divigroup.divigroup.service.UsuarioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.quality.Strictness;
import org.mockito.junit.jupiter.MockitoSettings;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
public class HistorialPagosServiceTest {

    @Mock
    private HistorialPagoService historialPagoService;

    @Mock
    private CuentaService cuentaService;

    @Mock
    private UsuarioService usuarioService;

    @InjectMocks
    private HistorialPagosServiceTest historialPagosServiceTest;

    private Cuenta cuenta;
    private Usuario usuario;


    @Test
    @DisplayName("Test encontrar por cuenta")
    public void testEncontrarPorCuenta() {
        // Arrange
        List<HistorialPago> historialPagosMock = new ArrayList<>();
        historialPagosMock.add(new HistorialPago());
        when(historialPagoService.encontrarPorCuenta(cuenta)).thenReturn(historialPagosMock);

        // Act
        List<HistorialPago> historialPagos = historialPagoService.encontrarPorCuenta(cuenta);

        // Assert
        assertEquals(1, historialPagos.size());
    }

    @Test
    @DisplayName("Test guardar historial de pago")
    public void testGuardar() {
        // Arrange
        HistorialPago historialPago = new HistorialPago();
        historialPago.setId(2);
        historialPago.setCuenta(cuenta);

        when(historialPagoService.guardar(any(HistorialPago.class))).thenReturn(historialPago);

        // Act
        HistorialPago historialPagoGuardado = historialPagoService.guardar(historialPago);

        // Assert
        assertEquals(historialPago, historialPagoGuardado);
    }
}