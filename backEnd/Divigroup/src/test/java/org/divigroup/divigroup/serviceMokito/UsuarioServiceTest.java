package org.divigroup.divigroup.serviceMokito;

import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IUsuarioRepository;
import org.divigroup.divigroup.service.UsuarioService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verifyNoInteractions;

@ExtendWith(MockitoExtension.class)
public class UsuarioServiceTest {

    @InjectMocks
    private UsuarioService usuarioService;

    @Mock
    private IUsuarioRepository usuarioRepository;

    @Test
    @DisplayName("Test de crear usuario sin nombre")
    public void testCrearUsuarioSinNombre() {
        Usuario usuario = new Usuario();
        usuario.setUsername(null);
        usuario.setPassword("password");


        assertThrows(RuntimeException.class, ()-> usuarioService.crearUsuario(usuario));
        verifyNoInteractions(usuarioRepository);
    }

}
