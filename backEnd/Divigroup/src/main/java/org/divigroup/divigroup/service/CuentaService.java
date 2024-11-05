package org.divigroup.divigroup.service;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.divigroup.divigroup.dto.AgregarGastoDTO;
import org.divigroup.divigroup.dto.GrupoParticipanteDTO;
import org.divigroup.divigroup.dto.GrupoListaParticipantesDTO;
import org.divigroup.divigroup.model.*;
import org.divigroup.divigroup.repository.ICuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
@AllArgsConstructor

public class CuentaService {
    @Autowired
    private ICuentaRepository cuentaRepository;

    @Autowired
    private UsuarioCuentaService usuarioCuentaService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    @Lazy
    private ProductoService productoService;

    /**
     * Creamos una cuenta
     * @param cuenta Cuenta que vamos a guardar
     * @return devuelve el objeto entero de nuevo
     */
    public Cuenta crearCuenta(Cuenta cuenta){
        return cuentaRepository.save(cuenta);
    }

    /**
     * Agrega un usuario a una cuenta
     * @param dto DTO con los datos de la relación
     * @return devuelve la relación entre ambos
     */
    public GrupoListaParticipantesDTO agregarUsuarioCuenta(GrupoParticipanteDTO dto){
        Cuenta cuenta = cuentaRepository.findById(dto.getIdGrupo()).orElse(null);
        Usuario usuario = usuarioService.buscarUsuarioId(dto.getIdUsuario());

        if (cuenta == null || usuario == null){
            return null;
        }
        usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario);
        List<Usuario> participantes = usuarioCuentaService.listaUsuarios(cuenta);

        return new GrupoListaParticipantesDTO(cuenta, participantes);
    }

    /**
     * Lista los participantes de una cuenta
     * @param idCuenta id de la cuenta
     * @return DTO con la cuenta y los participantes
     */
    public GrupoListaParticipantesDTO listaParticipantes(int idCuenta) {
        Cuenta cuenta = cuentaRepository.findById(idCuenta).orElse(null);
        if (cuenta == null){
            return null;
        }
        List<Usuario> participantes = usuarioCuentaService.listaUsuarios(cuenta);

        return new GrupoListaParticipantesDTO(cuenta, participantes);
    }

    /**
     * Elimina un usuario de una cuenta
     * @param dto DTO con los datos de la relación
     * @return DTO con la cuenta y los participantes
     */
    public GrupoListaParticipantesDTO eliminarUsuarioCuenta(GrupoParticipanteDTO dto) {
        Cuenta cuenta = cuentaRepository.findById(dto.getIdGrupo()).orElse(null);
        Usuario usuario = usuarioService.buscarUsuarioId(dto.getIdUsuario());

        if (cuenta == null || usuario == null){
            return null;
        }
        usuarioCuentaService.eliminarUsuarioCuenta(cuenta, usuario);
        List<Usuario> participantes = usuarioCuentaService.listaUsuarios(cuenta);

        return new GrupoListaParticipantesDTO(cuenta, participantes);
    }

    /**
     * Lista las cuentas de un usuario
     * @param idUsuario id del usuario
     * @return lista de cuentas
     */
    public List<Cuenta> listarCuentas(int idUsuario) {
        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);
        return usuarioCuentaService.listaCuentas(usuario);
    }

    /**
     * Agrega un gasto a una cuenta
     * @param dto DTO con los datos del gasto
     * @return producto creado
     */
    public Producto agregarGasto(AgregarGastoDTO dto) {
        Cuenta cuenta = cuentaRepository.findById(dto.getIdGrupo()).orElse(null);
        Usuario usuario = usuarioService.buscarUsuarioId(dto.getIdUsuario());

        if (cuenta == null || usuario == null){
            return null;
        }
        Producto producto = dto.getProducto();
        producto.setCuenta(cuenta);
        producto.setUser(usuario);

        return productoService.crearProducto(producto);
    }

    /**
     * Busca una cuenta por su id
     * @param idCuenta id de la cuenta
     * @return cuenta encontrada
     */
    public Cuenta buscarCuentaId(int idCuenta){
        return cuentaRepository.findById(idCuenta).orElse(null);
    }
}
