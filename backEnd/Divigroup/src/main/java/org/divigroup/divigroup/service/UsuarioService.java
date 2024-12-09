package org.divigroup.divigroup.service;

import jakarta.validation.Valid;
import lombok.NoArgsConstructor;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;


@Service
@NoArgsConstructor
@Validated
public class UsuarioService {
    @Autowired
    IUsuarioRepository usuarioRepository;

    /**
     * Buscar un usuario por ID
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

    public Usuario crearUsuario(@Valid Usuario usuario) {
        if (usuario.getUsername() == null){
            throw new RuntimeException("El nombre de usuario no puede ser nulo");
        }
        if (usuario.getUsername().isBlank()){
            throw new RuntimeException("El nombre de usuario no puede estar vacío");
        }
        return usuarioRepository.save(usuario);
    }
}
