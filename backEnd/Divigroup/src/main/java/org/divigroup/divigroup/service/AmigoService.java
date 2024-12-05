package org.divigroup.divigroup.service;

import lombok.AllArgsConstructor;
import org.divigroup.divigroup.model.Amigo;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.repository.IAmigoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AmigoService {
    IAmigoRepository amigoRepository;
    UsuarioService usuarioService;

    /**
     * Lista todos los amigos de un usuario
     * @param idUsuario El ID del usuario sobre el que queremos hacer las consultas
     * @return Lista de amigos
     */
    public List<Usuario> amigosUsuario (int idUsuario){
        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);

        List<Amigo> amigos = amigoRepository.amigos(usuario);
        List<Usuario> participantes = new ArrayList<>();

        for (Amigo a : amigos){
            if (a.getAmigo().equals(usuario)){
                participantes.add(a.getUser());
            }else {
                participantes.add(a.getAmigo());
            }
        }
        return participantes;
    }

    /**
     * Crea una amistad entre dos usuarios
     * @param idUsuario El ID del usuario que quiere añadir un amigo
     * @param idAmigo El ID del amigo que se quiere añadir
     * @return Amigo creado
     */
    public Amigo crearAmigo(int idUsuario, int idAmigo){
        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);
        Usuario amigo = usuarioService.buscarUsuarioId(idAmigo);

        if (usuario == null || amigo == null){
            throw new IllegalArgumentException("Usuario o amigo no encontrado");
        }

        Amigo amigoNuevo = amigoRepository.posibleAmigo(usuario, amigo).orElse(null);

        if (amigoNuevo == null){
            amigoNuevo = new Amigo();
        }
        amigoNuevo.setUser(usuario);
        amigoNuevo.setAmigo(amigo);
        amigoNuevo.setConfirmado(false);

        return amigoRepository.save(amigoNuevo);
    }


    /**
     * Confirma una amistad entre dos usuarios
     * @param idUsuario El ID del usuario que quiere confirmar un amigo
     * @param idAmigo El ID del amigo que se quiere confirmar
     * @throws Exception Si no se puede confirmar la amistad
     */
    public void confirmarAmigo(int idUsuario, int idAmigo) throws Exception {
        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);
        Usuario amigo = usuarioService.buscarUsuarioId(idAmigo);

        amigoRepository.actualizarConfirmacion(usuario, amigo);

    }
}
