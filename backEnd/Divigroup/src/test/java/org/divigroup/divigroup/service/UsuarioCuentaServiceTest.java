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
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
public class UsuarioCuentaServiceTest {

    @Autowired
    UsuarioCuentaService usuarioCuentaService;

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    CuentaService cuentaService;

    Cuenta cuenta;
    Usuario usuario;
    Usuario usuario1;

    @BeforeEach
    public void setUp() {
        // Arrange
        usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");


        usuario1 = new Usuario();
        usuario1.setId(2);
        usuario1.setUsername("usuario1");
        usuario1.setPassword("password");

        usuario = usuarioService.crearUsuario(usuario);
        usuario1 = usuarioService.crearUsuario(usuario1);

        AgregarCuentaDTO agregarCuentaDTO = new AgregarCuentaDTO();
        agregarCuentaDTO.setNombre("Cuenta 1");
        agregarCuentaDTO.setDescripcion("Descripcion 1");
        agregarCuentaDTO.setImagen("Imagen 1");
        agregarCuentaDTO.setImagenFondo("Imagen Fondo 1");
        agregarCuentaDTO.setPersonas(new ArrayList<>());

        cuenta = cuentaService.crearCuenta(agregarCuentaDTO, usuario.getId());
    }

    @Test
    @DisplayName("Test de listar todos los integrantes de una cuenta")
    public void testListarIntegrantesCuenta() {
        // Arrange
        // Act
        List<Usuario> usuarios = usuarioCuentaService.listaUsuarios(cuenta);
        // Assert
        assertEquals(1, usuarios.size());
        assertNotEquals(0, usuarios.size());
    }

    @Test
    @DisplayName("Test de agregar un usuario a una cuenta")
    public void testAgregarUsuarioCuenta() {
        // Arrange

        // Act
        usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario1, false, usuario.getId());
        // Assert
        assertEquals(2, usuarioCuentaService.listaUsuarios(cuenta).size());
    }

    @Test
    @DisplayName("Test de agregar un usuario a una cuenta con id 0")
    public void testAgregarUsuarioCuentaIdCero() {
        // Arrange
        Usuario usuario = usuarioService.buscarUsuarioId(123123123);
        // Act
        assertThrows(RuntimeException.class, ()-> usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario, false, 0));
        // Assert
        assertEquals(1, usuarioCuentaService.listaUsuarios(cuenta).size());
    }

}
