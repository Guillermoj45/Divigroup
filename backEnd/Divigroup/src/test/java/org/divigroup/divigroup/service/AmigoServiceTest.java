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

import static org.junit.jupiter.api.Assertions.*;

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

    Usuario usuario;
    Usuario amigo;

    @BeforeEach
    public void setUp() {
        // Arrange
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");

        this.usuario = usuarioService.crearUsuario(usuario);

        Usuario amigo = new Usuario();
        amigo.setId(2);
        amigo.setUsername("amigo");
        amigo.setPassword("password");

        this.amigo = usuarioService.crearUsuario(amigo);

    }

    @Test
    @DisplayName("Test de amistad true")
    public void testCrearAmigoTrue() throws Exception {
        // Arrange


        // Act
        amigoService.crearAmigo(usuario.getId(), amigo.getId());
        amigoService.crearAmigo(usuario.getId(), amigo.getId());

        amigoService.confirmarAmigo(usuario.getId(),amigo.getId());
        amigoService.confirmarAmigo(usuario.getId(),amigo.getId());

        // Assert

        assertEquals(1, amigoService.amigosUsuario(usuario.getId()).size());
    }


    @Test
    @DisplayName("Test de usuario nuevo sin amigos")
    public void testComprobacionUsuarioSinAmigos() throws Exception {
        // Arrange

        // Act


        // Assert
        assertNotEquals(2, amigoService.amigosUsuario(usuario.getId()).size());
        assertEquals(0, amigoService.amigosUsuario(usuario.getId()).size());
    }

    @Test
    @DisplayName("Test de busqueda de solo amigos")
    public void testBusquedaSoloAmigos() throws Exception {
        // Arrange

        // Act

        // Creamos la amistad
        amigoService.crearAmigo(usuario.getId(), amigo.getId());
        amigoService.crearAmigo(usuario.getId(), amigo.getId());
        // No Confirmamos la amistad
        // amigoService.confirmarAmigo(usuario.getId(),amigo.getId());
        // amigoService.confirmarAmigo(usuario.getId(),amigo.getId());

        // Assert
        assertNotEquals(1, amigoService.amigosUsuario(usuario.getId()).size());
        assertEquals(0, amigoService.amigosUsuario(usuario.getId()).size());
    }

    @Test
    @DisplayName("Test usuario no puede ser amigo de un usuario que no existe")
    public void testUsuarioNoExiste() throws Exception {
        // Arrange

        // Act

        // Creamos la amistad
        assertThrows(IllegalArgumentException.class, () -> amigoService.crearAmigo(usuario.getId(), 21322));
        amigoService.confirmarAmigo(usuario.getId(), 21322);

        // Assert
        assertEquals(0, amigoService.amigosUsuario(usuario.getId()).size());
    }

    @Test
    @DisplayName("Test de amistad false")
    public void testCrearAmigoFalse() throws Exception {
        // Arrange

        // Act

        // Creamos la amistad
        amigoService.crearAmigo(usuario.getId(), amigo.getId());
        amigoService.crearAmigo(usuario.getId(), amigo.getId());
        // Confirmamos la amistad
        amigoService.confirmarAmigo(usuario.getId(),amigo.getId());
        amigoService.confirmarAmigo(usuario.getId(),amigo.getId());

        // Assert
        assertNotEquals(2, amigoService.amigosUsuario(usuario.getId()).size());
        assertEquals(1, amigoService.amigosUsuario(usuario.getId()).size());
    }




    @Test
    @DisplayName("Confirmar amigo")
    public void testConfirmarAmigo() throws Exception {
        // Arrange

        // Act
        amigoService.crearAmigo(usuario.getId(), amigo.getId());
        assertEquals(0, amigoService.amigosUsuario(amigo.getId()).size());

        amigoService.confirmarAmigo(usuario.getId(), amigo.getId());

        // Assert
        assertEquals(1, amigoService.amigosUsuario(amigo.getId()).size());
    }
}
