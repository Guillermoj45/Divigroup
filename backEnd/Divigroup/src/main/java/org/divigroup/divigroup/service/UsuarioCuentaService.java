package org.divigroup.divigroup.service;

import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.model.UsuarioCuenta;
import org.divigroup.divigroup.repository.IUsuarioCuentaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioCuentaService {
    IUsuarioCuentaRepository cuentaRepository;

    /**
     * Agrega un usuario a una cuenta
     * @param cuenta A la cuenta a la que lo queremos añadir
     * @param usuario El usuarios que queremos añadir
     * @return devuelve la relación entre ambos
     */
    public UsuarioCuenta agregarUsuarioCuenta(Cuenta cuenta, Usuario usuario){
        UsuarioCuenta usuarioCuenta = new UsuarioCuenta();
        usuarioCuenta.setUsuario(usuario);
        usuarioCuenta.setCuenta(cuenta);
        return cuentaRepository.save(usuarioCuenta);
    }

    /**
     * Elimina un usuario de una cuenta
     * @param cuenta La cuenta a la que lo queremos añadir
     * @param usuario El usuario que queremos añadir
     * @return un boolean que indica si a sido eliminado o no
     */
    public boolean eliminarUsuarioCuenta(Cuenta cuenta, Usuario usuario){
        UsuarioCuenta usuarioCuenta = cuentaRepository.findTopByUsuarioEqualsAndCuentaEquals(usuario, cuenta).orElse(null);

        if (usuarioCuenta != null){
            cuentaRepository.delete(usuarioCuenta);
            return true;
        }
        return false;
    }

    /**
     * Listar los usuarios que hay en una cuenta
     * @param cuenta La cuenta que queremos para filtrar
     * @return una lista de usuarios a la que pertenecen a la cuenta
     */
    public List<Usuario> listaUsuarios (Cuenta cuenta){
        List<UsuarioCuenta> usuarioCuentas = cuentaRepository.findAllByCuentaEquals(cuenta);
        List<Usuario> usuarios = new ArrayList<>();
        for (UsuarioCuenta c : usuarioCuentas){
            usuarios.add(c.getUsuario());
        }

        return usuarios;
    }

    
}
