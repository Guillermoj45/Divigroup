package org.divigroup.divigroup.service;


import lombok.NoArgsConstructor;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.model.UsuarioCuenta;
import org.divigroup.divigroup.repository.ICuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class CuentaService {
    @Autowired
    ICuentaRepository cuentaRepository;

    UsuarioCuentaService usuarioCuentaService;
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
    public UsuarioCuenta agregarUsuarioCuenta(int idGrupo, int idUsuario){
        Cuenta cuenta = cuentaRepository.findById(idGrupo).orElse(null);
        Usuario usuario = usuarioService.buscarUsuarioId(idUsuario);

        if (cuenta == null || usuario == null){
            return null;
        }
        return usuarioCuentaService.agregarUsuarioCuenta(cuenta, usuario);
    }

}
