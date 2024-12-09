package org.divigroup.divigroup.serviceMokito;

import org.divigroup.divigroup.model.Producto;
import org.divigroup.divigroup.repository.IProductoRepository;
import org.divigroup.divigroup.service.ProductoService;
import org.divigroup.divigroup.service.UsuarioService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verifyNoInteractions;

@ExtendWith(MockitoExtension.class)
public class GastoServiceTest {

    @InjectMocks
    private ProductoService gastoService;

    @Mock
    private IProductoRepository gastoRepository;


    @Test
    @DisplayName("Test de creación de gasto")
    public void testCrearGasto() {
        Producto gasto = new Producto();
        gasto.setNombre("Gasto");
        gasto.setPrecio(-1);
        gasto.setDescripcion("Gasto de prueba");

        assertThrows(IllegalArgumentException.class, ()-> gastoService.crearProducto(gasto, null, null));

        assertNotEquals(-1, gasto.getId());
        verifyNoInteractions(gastoRepository);
    }
}
