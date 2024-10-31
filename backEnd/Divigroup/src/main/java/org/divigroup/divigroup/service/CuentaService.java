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

    public Cuenta crearCuenta(Cuenta cuenta){
        return cuentaRepository.save(cuenta);
    }

}
