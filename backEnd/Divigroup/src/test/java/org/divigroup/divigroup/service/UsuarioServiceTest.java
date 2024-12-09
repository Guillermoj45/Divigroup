package org.divigroup.divigroup.service;

import jakarta.transaction.Transactional;
import org.divigroup.divigroup.model.Usuario;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
public class UsuarioServiceTest {
    @Autowired
    UsuarioService usuarioService;


    @Test
    @DisplayName("test crear usuario")
    public void testCrearUsuario() {
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");

        usuario = usuarioService.crearUsuario(usuario);

        assertNotNull(usuario);
    }

    @Test
    @DisplayName("test de comprobacion de nombre de usuario")
    public void testComprobarNombreUsuario() {
        Usuario usuario = new Usuario();
        usuario.setId(1);

        usuario.setPassword("password");

        assertThrows(RuntimeException.class, () -> usuarioService.crearUsuario(usuario));
    }

    @Test
    @DisplayName("test de comprobacion de nombre de usuario repetido")
    public void testComprobarNombreUsuarioRepetido() {
        Usuario usuario = new Usuario();
        usuario.setUsername("usuario");
        usuario.setPassword("password");



        Usuario usuario2 = new Usuario();
        usuario2.setUsername("usuario");
        usuario2.setPassword("password");

        usuarioService.crearUsuario(usuario);
        assertThrows(RuntimeException.class, () -> usuarioService.crearUsuario(usuario2));
    }


}
