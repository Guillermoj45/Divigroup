package org.divigroup.divigroup.service;

import jakarta.transaction.Transactional;
import org.divigroup.divigroup.dto.AgregarCuentaDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
public class CuentaServiceTest {
    @Autowired
    CuentaService cuentaService;
    @Autowired
    ProductoService productoService;
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    UsuarioCuentaService usuarioCuentaService;

    Usuario usuario;
    Usuario usuario2;
    Usuario usuario3;

    @BeforeEach
    public void setUp() {
        usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");

        usuario = usuarioService.crearUsuario(usuario);

        usuario2 = new Usuario();
        usuario2.setId(2);
        usuario2.setUsername("usuario2");
        usuario2.setPassword("password");

        usuario2 = usuarioService.crearUsuario(usuario2);

        usuario3 = new Usuario();
        usuario3.setId(3);
        usuario3.setUsername("usuario3");
        usuario3.setPassword("password");

        usuario3 = usuarioService.crearUsuario(usuario3);
    }

    @Test
    @DisplayName("test crear cuenta con administradores true")
    public void testCrearCuentaTrue() {
        // Arrange
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre("cuenta");
        cuentaDTO.setDescripcion("descripcion");
        cuentaDTO.setImagen("imagen");
        cuentaDTO.setPersonas(new ArrayList<>());
        cuentaDTO.setImagenFondo("imagenFondo");

        Cuenta cuenta = cuentaService.crearCuenta(cuentaDTO, usuario.getId());
        // Act
        // Assert
        assertNotNull(cuenta);
        assertTrue(usuarioCuentaService.esAdmin(cuenta, usuario));
    }

    @Test
    @DisplayName("test crear cuenta con administradores false")
    public void testCrearCuentaFalse() {
        // Arrange
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre("cuenta");
        cuentaDTO.setDescripcion("descripcion");
        cuentaDTO.setImagen("imagen");
        cuentaDTO.setPersonas(new ArrayList<>());
        cuentaDTO.setImagenFondo("imagenFondo");

        // Act
        Cuenta cuenta = cuentaService.crearCuenta(cuentaDTO, usuario.getId());
        // Assert
        assertFalse(usuarioCuentaService.eliminarUsuarioCuenta(cuenta, usuario));
        assertNotNull(cuenta);
        assertTrue(usuarioCuentaService.esAdmin(cuenta, usuario));
    }

    @Test
    @DisplayName("test crear cuenta con administradores limite")
    public void testCrearCuentaTrue2() {
        // Arrange
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre("cuenta");
        cuentaDTO.setDescripcion("descripcion");
        cuentaDTO.setImagen("imagen");
        cuentaDTO.setPersonas(new ArrayList<>());
        cuentaDTO.setImagenFondo("imagenFondo");

        Cuenta cuenta = cuentaService.crearCuenta(cuentaDTO, usuario.getId());
        // Act
        usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario2, true, usuario.getId());
        // Assert
        assertNotNull(cuenta);
        assertTrue(usuarioCuentaService.eliminarUsuarioCuenta(cuenta, usuario));
        assertFalse(usuarioCuentaService.esAdmin(cuenta, usuario));
        assertTrue(usuarioCuentaService.esAdmin(cuenta, usuario2));
    }

    @Test
    @DisplayName("test solo los administradores pueden agregar o eliminar usuarios")
    public void testCrearCuentaTrue3() {
        // Arrange
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre("cuenta");
        cuentaDTO.setDescripcion("descripcion");
        cuentaDTO.setImagen("imagen");
        cuentaDTO.setPersonas(new ArrayList<>());
        cuentaDTO.setImagenFondo("imagenFondo");

        Cuenta cuenta = cuentaService.crearCuenta(cuentaDTO, usuario.getId());
        // Act
        usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario2, usuario.getId());
        // Assert
        assertNotNull(cuenta);
        assertFalse(usuarioCuentaService.eliminarUsuarioCuenta(cuenta, usuario2));
        assertFalse(usuarioCuentaService.esAdmin(cuenta, usuario2));
    }

    @Test
    @DisplayName("test crear cuenta sin nombre")
    public void testCrearCuenta() {
        // Arrange
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre(null);
        // Act
        // Assert
        assertThrows(IllegalArgumentException.class, () -> cuentaService.crearCuenta(cuentaDTO, usuario.getId()));
    }

    @Test
    @DisplayName("test crear cuenta con nombre")
    public void testCrearCuenta2() {
        // Arrange
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre("cuenta");
        cuentaDTO.setDescripcion("descripcion");
        cuentaDTO.setImagen("imagen");
        cuentaDTO.setPersonas(new ArrayList<>());
        cuentaDTO.setImagenFondo("imagenFondo");

        // Act
        Cuenta cuenta = cuentaService.crearCuenta(cuentaDTO, usuario.getId());
        // Assert
        assertNotNull(cuenta);
    }
}
