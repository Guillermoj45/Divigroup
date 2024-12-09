package org.divigroup.divigroup.service;

import jakarta.transaction.Transactional;
import org.divigroup.divigroup.dto.AgregarCuentaDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.HistorialPago;
import org.divigroup.divigroup.model.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
public class HistorialPagosService {
    @Autowired
    private HistorialPagoService historialPagoService;

    @Autowired
    private CuentaService cuentaService;

    @Autowired
    private UsuarioService usuarioService;

    Cuenta cuenta;
    Usuario usuario;

    @BeforeEach
    public void setUp() {
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");

        this.usuario = usuarioService.crearUsuario(usuario);

        AgregarCuentaDTO cuenta = new AgregarCuentaDTO();
        cuenta.setNombre("cuenta");
        cuenta.setDescripcion("descripcion");
        cuenta.setImagen("imagen");
        cuenta.setPersonas(new ArrayList<>());

        this.cuenta = cuentaService.crearCuenta(cuenta, this.usuario.getId());

        HistorialPago historialPago = new HistorialPago();
        historialPago.setId(1);
        historialPago.setCuenta(this.cuenta);

        historialPagoService.guardar(historialPago);
    }

    @Test
    @DisplayName("Test encontrar por cuenta")
    public void testEncontrarPorCuenta() {
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

        // Act
        HistorialPago historialPagoGuardado = historialPagoService.guardar(historialPago);

        // Assert
        assertEquals(historialPago, historialPagoGuardado);
    }
}
