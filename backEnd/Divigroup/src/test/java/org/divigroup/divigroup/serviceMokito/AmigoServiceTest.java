package org.divigroup.divigroup.serviceMokito;

import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IAmigoRepository;
import org.divigroup.divigroup.service.AmigoService;
import org.divigroup.divigroup.service.UsuarioService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
public class AmigoServiceTest {

    @InjectMocks
    private AmigoService amigoService;

    @Mock
    private UsuarioService usuarioService;

    @Mock
    private IAmigoRepository amigoRepository;

    @Test
    @DisplayName("Test de amistad con nadie")
    public void testCrearAmigoConNadie() {

        when(usuarioService.buscarUsuarioId(any(Integer.class))).thenReturn(null);

        assertThrows(IllegalArgumentException.class ,() -> amigoService.crearAmigo(1, 2));

        verifyNoInteractions(amigoRepository);
    }
}
