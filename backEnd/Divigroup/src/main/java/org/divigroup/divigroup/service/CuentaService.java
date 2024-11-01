package org.divigroup.divigroup.service;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.divigroup.divigroup.dto.GrupoParticipanteDTO;
import org.divigroup.divigroup.dto.GrupoListaParticipantesDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.model.UsuarioCuenta;
import org.divigroup.divigroup.repository.ICuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
@AllArgsConstructor

public class CuentaService {
    @Autowired
    ICuentaRepository cuentaRepository;

    @Autowired
    UsuarioCuentaService usuarioCuentaService;

    @Autowired
    UsuarioService usuarioService;

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
     * @param cuenta A la cuenta a la que lo queremos añadir
     * @param usuario El usuarios que queremos añadir
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
        GrupoListaParticipantesDTO dto1 = new GrupoListaParticipantesDTO(cuenta, participantes);

        return dto1;
    }

    public GrupoListaParticipantesDTO listaParticipantes(int idCuenta) {
        Cuenta cuenta = cuentaRepository.findById(idCuenta).orElse(null);
        if (cuenta == null){
            return null;
        }
        List<Usuario> participantes = usuarioCuentaService.listaUsuarios(cuenta);
        GrupoListaParticipantesDTO dto = new GrupoListaParticipantesDTO(cuenta, participantes);
        return dto;
    }

    public GrupoListaParticipantesDTO eliminarUsuarioCuenta(GrupoParticipanteDTO dto) {
        Cuenta cuenta = cuentaRepository.findById(dto.getIdGrupo()).orElse(null);
        Usuario usuario = usuarioService.buscarUsuarioId(dto.getIdUsuario());

        if (cuenta == null || usuario == null){
            return null;
        }
        usuarioCuentaService.eliminarUsuarioCuenta(cuenta, usuario);
        List<Usuario> participantes = usuarioCuentaService.listaUsuarios(cuenta);
        GrupoListaParticipantesDTO dto1 = new GrupoListaParticipantesDTO(cuenta, participantes);

        return dto1;
    }

    public List<Cuenta> listarCuentas(int idUsuario) {
        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);
        return usuarioCuentaService.listaCuentas(usuario);
    }
}
