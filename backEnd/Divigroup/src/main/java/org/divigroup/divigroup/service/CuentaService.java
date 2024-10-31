package org.divigroup.divigroup.service;


import lombok.NoArgsConstructor;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.model.UsuarioCuenta;
import org.divigroup.divigroup.repository.ICuentaRepository;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class CuentaService {
    ICuentaRepository cuentaRepository;

    /**
     * Creamos una cuenta
     * @param cuenta Cuenta que vamos a guardar
     * @return devuelve el objeto entero de nuevo
     */
    public Cuenta crearCuenta(Cuenta cuenta){
        return cuentaRepository.save(cuenta);
    }

}
