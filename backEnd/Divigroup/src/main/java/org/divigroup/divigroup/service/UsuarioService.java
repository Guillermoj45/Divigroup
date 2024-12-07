package org.divigroup.divigroup.service;

import lombok.NoArgsConstructor;
import org.divigroup.divigroup.dto.IdUsuarioDTO;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class UsuarioService {
    @Autowired
    IUsuarioRepository usuarioRepository;

    /**
     * Buscar un usuario por id
     * @param id Id del usuario
     * @return Usuario
     */
    public Usuario buscarUsuarioId(int id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    /**
     * Buscar un usuario por nombre
     * @param userName userName del usuario
     * @return Usuario
     */
    public Integer buscarUsuarioUserName(String userName) {
        Integer idUsuario = usuarioRepository.buscarNombre(userName).orElse(null);

        if (idUsuario == null)
        {
            idUsuario = -1;
        }

        return idUsuario;
    }

    public Usuario crearUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
