package org.divigroup.divigroup.service;

import jakarta.transaction.Transactional;
import org.checkerframework.checker.units.qual.A;
import org.divigroup.divigroup.dto.AgregarCuentaDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Producto;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.model.enums.Rol;
import org.divigroup.divigroup.model.enums.TipoPago;
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
public class GastoServiceTest {
    @Autowired
    ProductoService productoService;
    @Autowired
    CuentaService cuentaService;
    @Autowired
    UsuarioService usuarioService;

    Usuario usuario;
    Cuenta cuenta;

    @BeforeEach
    public void setUp() {
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setUsername("usuario");
        usuario.setPassword("password");
        usuario.setAvatar("avatar");
        usuario.setRol(Rol.USER);
        usuario.setTipoPago(TipoPago.BIZUM);

        this.usuario = usuarioService.crearUsuario(usuario);

        AgregarCuentaDTO cuentaDTO = new AgregarCuentaDTO();
        cuentaDTO.setNombre("cuenta");
        cuentaDTO.setDescripcion("descripcion");
        cuentaDTO.setImagen("imagen");
        cuentaDTO.setPersonas(new ArrayList<>());

        cuenta = cuentaService.crearCuenta(cuentaDTO, this.usuario.getId());
    }


    @Test
    @DisplayName("Test gasto true")
    public void testCrearGastoTrue() {
        // Arrange


        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(12.2F);
        producto.setDescripcion("descripcion");
        producto.setUser(usuario);
        producto.setCuenta(cuenta);

        // Act
        Producto productoNuevo = productoService.crearProducto(producto, null, null);

        // Assert

        assertNotEquals(null, productoNuevo);
    }

    @Test
    @DisplayName("Test un gasto debe estar asociado a una cuenta false")
    public void testCrearGastoFalseCuenta() {
        // Arrange
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(12.2F);
        producto.setDescripcion("descripcion");
        producto.setUser(usuario);

        // Act && Assert
        assertThrows(IllegalArgumentException.class, () -> productoService.crearProducto(producto, null, null));
    }

        @Test
    @DisplayName("Test un gasto debe estar asociado a una cuenta true")
    public void testCrearGastoFalseCuentaTrue() {
        // Arrange
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(12.2F);
        producto.setDescripcion("descripcion");
        producto.setUser(usuario);
        producto.setCuenta(cuenta);

        // Act && Assert
        assertNotEquals(null, productoService.crearProducto(producto, null, null));
    }

    @Test
    @DisplayName("Test un gasto debe estar asociado a un usuario false")
    public void testCrearGastoFalseUsuario() {
        // Arrange
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(12.2F);
        producto.setDescripcion("descripcion");

        producto.setCuenta(cuenta);

        // Act && Assert
        assertThrows(IllegalArgumentException.class, () -> productoService.crearProducto(producto, null, null));
    }

    @Test
    @DisplayName("Test un gasto debe estar asociado a un usuario true")
    public void testCrearGastoFalseUsuarioTrue() {
        // Arrange
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(12.2F);
        producto.setDescripcion("descripcion");
        producto.setUser(usuario);

        producto.setCuenta(cuenta);

        // Act && Assert
        assertNotEquals(null, productoService.crearProducto(producto, null, null));
    }

    @Test
    @DisplayName("Test gasto false")
    public void testCrearGastoFalse() {
        // Arrange
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(-12.2F);
        producto.setDescripcion("descripcion");

        producto.setCuenta(cuenta);

       // Act && Assert
        assertThrows(IllegalArgumentException.class, () -> productoService.crearProducto(producto, null, null));
    }

    @Test
    @DisplayName("Test gasto limite")
    public void testCrearGastoFalseLimite() {
        // Arrange
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombre("producto");
        producto.setPrecio(0);
        producto.setDescripcion("descripcion");
        producto.setUser(usuario);
        producto.setCuenta(cuenta);


       // Act && Assert
        assertNotEquals(null, productoService.crearProducto(producto, null, null).getId());
    }

}
