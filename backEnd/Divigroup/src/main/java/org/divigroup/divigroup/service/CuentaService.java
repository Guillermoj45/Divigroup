package org.divigroup.divigroup.service;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.divigroup.divigroup.dto.*;
import org.divigroup.divigroup.model.*;
import org.divigroup.divigroup.repository.ICuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class CuentaService {

    private ICuentaRepository cuentaRepository;

    private UsuarioCuentaService usuarioCuentaService;

    private UsuarioService usuarioService;


    /**
     * Creamos una cuenta
     * @param agregarCuentaDTO Cuenta que vamos a guardar
     * @return devuelve el objeto entero de nuevo
     */
    public Cuenta crearCuenta(AgregarCuentaDTO agregarCuentaDTO, int idUsuario) {
        if (agregarCuentaDTO.getNombre() == null){
            throw new IllegalArgumentException("El nombre de la cuenta no puede ser nulo");
        }
        if (idUsuario == 0){
            throw new IllegalArgumentException("El id del usuario no puede ser 0");
        }

        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);
        Cuenta cuentaNueva = new Cuenta(agregarCuentaDTO.getNombre(), agregarCuentaDTO.getDescripcion(), agregarCuentaDTO.getImagen(), agregarCuentaDTO.getImagenFondo());

        usuarioCuentaService.agregarUsuarioCuenta(cuentaNueva, usuario, true, idUsuario);

        ArrayList<Usuario> usuarioMapeados = new ArrayList<>();
        for (Usuario u : agregarCuentaDTO.getPersonas()){
            usuarioMapeados.add(new Usuario(u));
        }

        for (Usuario u : usuarioMapeados){
            u = new Usuario(u);
            usuarioCuentaService.agregarUsuarioCuenta(cuentaNueva, u, false, idUsuario);
        }

        System.out.println("Cuenta creada: " + cuentaNueva);
        return cuentaRepository.save(cuentaNueva);
    }

    /**
     * Agrega un usuario a una cuenta
     * @param dto DTO con los datos de la relación
     * @return devuelve la relación entre ambos
     */
    public GrupoListaParticipantesDTO agregarUsuarioCuenta(GrupoParticipanteDTO dto, int idUsuarioAdmin) {
        Cuenta cuenta = cuentaRepository.findById(dto.getIdGrupo()).orElse(null);
        Usuario usuario = usuarioService.buscarUsuarioId(dto.getIdUsuario());

        if (cuenta == null || usuario == null){
            return null;
        }

        usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario, idUsuarioAdmin);
        Set<Usuario> participantes = new HashSet<>(usuarioCuentaService.listaUsuarios(cuenta));

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
        Set<Usuario> participantes = new HashSet<>(usuarioCuentaService.listaUsuarios(cuenta));


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
        Set<Usuario> participantes = new HashSet<>(usuarioCuentaService.listaUsuarios(cuenta));

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
     * Busca una cuenta por su id
     * @param idCuenta id de la cuenta
     * @return cuenta encontrada
     */
    public Cuenta buscarCuentaId(int idCuenta){
        return cuentaRepository.findById(idCuenta).orElse(null);
    }
}
