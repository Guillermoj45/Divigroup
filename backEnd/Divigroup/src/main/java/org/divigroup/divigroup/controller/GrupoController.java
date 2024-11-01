package org.divigroup.divigroup.controller;


import org.divigroup.divigroup.dto.GrupoParticipanteDTO;
import org.divigroup.divigroup.dto.GrupoListaParticipantesDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.service.CuentaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public GrupoListaParticipantesDTO agregarUsuarioCuenta(@RequestBody GrupoParticipanteDTO dto){
        return cuentaService.agregarUsuarioCuenta(dto);
    }

    @GetMapping("/participantes/{idCuenta}")
    public GrupoListaParticipantesDTO listaParticipantes(@PathVariable int idCuenta){
        return cuentaService.listaParticipantes(idCuenta);
    }

    @DeleteMapping("/participantes/eliminar")
    public GrupoListaParticipantesDTO eliminarUsuarioCuenta(@RequestBody GrupoParticipanteDTO dto){
        return cuentaService.eliminarUsuarioCuenta(dto);
    }

    @GetMapping("{idUsuario}")
    public List<Cuenta> listarCuentas(@PathVariable int idUsuario){
        return cuentaService.listarCuentas(idUsuario);
    }

}
