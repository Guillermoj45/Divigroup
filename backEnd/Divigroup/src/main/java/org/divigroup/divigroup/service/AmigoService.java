package org.divigroup.divigroup.service;

import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IAmigoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmigoService {
    IAmigoRepository amigoRepository;

    /**
     * Lista todos los amigos de un usuario
     * @param usuario El usuario sobre el que queremos hacer las consultas
     * @return Lista de amigos
     */
    public List<Usuario> amigosUsuario (Usuario usuario){
        return amigoRepository.amigos(usuario);
    }
}
