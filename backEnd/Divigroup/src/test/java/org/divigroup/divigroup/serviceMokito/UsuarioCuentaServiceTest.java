package org.divigroup.divigroup.serviceMokito;

import org.divigroup.divigroup.dto.AgregarCuentaDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.model.UsuarioCuenta;
import org.divigroup.divigroup.service.CuentaService;
import org.divigroup.divigroup.service.UsuarioCuentaService;
import org.divigroup.divigroup.service.UsuarioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UsuarioCuentaServiceTest {

    @Mock
    private UsuarioService usuarioService;

    @Mock
    private CuentaService cuentaService;

    @InjectMocks
    private UsuarioCuentaService usuarioCuentaService;

    private Cuenta cuenta;
    private Usuario usuario;
    private Usuario usuario1;


    @Test
    @DisplayName("Test de listar todos los integrantes de una cuenta")
    public void testListarIntegrantesCuenta() {
        // Arrange
        cuenta = new Cuenta();
        cuenta.setId(1);
        cuenta.setNombre("Cuenta 1");
        cuenta.setDescripcion("Descripcion 1");
        cuenta.setImagen("Imagen 1");
        cuenta.setImagenFondo("Imagen Fondo 1");
        // Act

        // Assert
        assertThrows(NullPointerException.class, () -> usuarioCuentaService.listaUsuarios(cuenta));

    }

    @Test
    @DisplayName("Test de agregar un usuario inexistente a una cuenta falso")
    public void testAgregarUsuarioCuenta() {
        // Arrange
        cuenta = new Cuenta();
        cuenta.setId(1);
        cuenta.setNombre("Cuenta 1");
        cuenta.setDescripcion("Descripcion 1");
        cuenta.setImagen("Imagen 1");
        cuenta.setImagenFondo("Imagen Fondo 1");
        // Act

        // Assert
        assertThrows(NullPointerException.class,() -> usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario1, false, usuario.getId()));

    }

    @Test
    @DisplayName("Test de agregar un usuario a una cuenta con id 0")
    public void testAgregarUsuarioCuentaIdCero() {
        // Arrange
        cuenta = new Cuenta();
        cuenta.setId(1);
        cuenta.setNombre("Cuenta 1");
        cuenta.setDescripcion("Descripcion 1");
        cuenta.setImagen("Imagen 1");
        cuenta.setImagenFondo("Imagen Fondo 1");

        // Act

        // Assert
        assertThrows(RuntimeException.class, ()->usuarioCuentaService.agregarUsuarioCuenta(cuenta, null, false, 0));

    }
}