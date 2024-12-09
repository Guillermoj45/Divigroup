package org.divigroup.divigroup.serviceMokito;

import org.divigroup.divigroup.dto.AgregarCuentaDTO;
import org.divigroup.divigroup.repository.ICuentaRepository;
import org.divigroup.divigroup.service.CuentaService;
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
public class CuentaServiceTest {

    @InjectMocks
    private CuentaService cuentaService;

    @Mock
    private UsuarioService usuarioService;

    @Mock
    private ICuentaRepository cuentaRepository;

    @Test
    @DisplayName("Test de creación de cuenta sin Nombre")
    public void testCrearCuenta() {
        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre(null);

        assertThrows(IllegalArgumentException.class ,()->cuentaService.crearCuenta(cuentaDTO, 1));
        verifyNoInteractions(usuarioService);
        verifyNoInteractions(cuentaRepository);
    }
}
