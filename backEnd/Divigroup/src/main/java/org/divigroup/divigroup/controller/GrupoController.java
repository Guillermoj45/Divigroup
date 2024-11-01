package org.divigroup.divigroup.controller;


import org.divigroup.divigroup.dto.AgregarPaticipanteDTO;
import org.divigroup.divigroup.dto.GrupoListaParticipantesDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.UsuarioCuenta;
import org.divigroup.divigroup.service.CuentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/grupo")
public class GrupoController {
    private final CuentaService cuentaService;

    public GrupoController(CuentaService cuentaService) {
        this.cuentaService = cuentaService;
    }

    @PostMapping("/nuevo")
    public Cuenta crearCuenta(@RequestBody Cuenta cuenta){
        return cuentaService.crearCuenta(cuenta);
    }

    @PostMapping("/participantes/nuevo")
    public GrupoListaParticipantesDTO agregarUsuarioCuenta(@RequestBody AgregarPaticipanteDTO dto){
        return cuentaService.agregarUsuarioCuenta(dto);
    }

}
