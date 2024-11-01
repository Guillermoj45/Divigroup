package org.divigroup.divigroup.service;

import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IUsuarioRepository;

public class UsuarioService {
    IUsuarioRepository usuarioRepository;

    /**
     * Buscar un usuario por id
     * @param id Id del usuario
     * @return Usuario
     */
    public Usuario buscarUsuarioId(int id) {
        return usuarioRepository.findById(id).orElse(null);
    }
}
