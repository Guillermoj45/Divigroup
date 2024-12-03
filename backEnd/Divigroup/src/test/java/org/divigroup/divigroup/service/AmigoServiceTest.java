package org.divigroup.divigroup.service;

import jakarta.transaction.Transactional;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import net.bytebuddy.implementation.bytecode.Throw;
import org.divigroup.divigroup.model.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Lazy;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
public class AmigoServiceTest {
    @Autowired
    @Lazy
    private AmigoService amigoService;

    @Lazy
    @Autowired
    private UsuarioService usuarioService;

    @BeforeEach
    public void setUp() {
        // Arrange
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");

        usuarioService.crearUsuario(usuario);

        Usuario amigo = new Usuario();
        amigo.setId(2);
        amigo.setUsername("amigo");
        amigo.setPassword("password");

        usuarioService.crearUsuario(amigo);
    }

    @Test
    @DisplayName("Crear amigo")
    public void testCrearAmigo() throws Exception {
        // Arrange


        // Act
        amigoService.crearAmigo(1, 2);
        amigoService.crearAmigo(1, 2);

        amigoService.confirmarAmigo(1,2);
        amigoService.confirmarAmigo(1,2);

        // Assert
        assertNotEquals(2, amigoService.amigosUsuario(1).size());
        assertEquals(1, amigoService.amigosUsuario(1).size());
    }
}
