package org.divigroup.divigroup.controller;


import lombok.AllArgsConstructor;
import org.divigroup.divigroup.dto.AgregarGastoDTO;
import org.divigroup.divigroup.dto.GrupoParticipanteDTO;
import org.divigroup.divigroup.dto.GrupoListaParticipantesDTO;
import org.divigroup.divigroup.dto.SoloProductoDTO;
import org.divigroup.divigroup.model.Cuenta;
import org.divigroup.divigroup.model.Producto;
import org.divigroup.divigroup.model.Usuario;
import org.divigroup.divigroup.service.CuentaService;
import org.divigroup.divigroup.service.ProductoService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/grupo")
@AllArgsConstructor
public class GrupoController {

    private final CuentaService cuentaService;
    private final ProductoService productoService;

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

    @PostMapping("gasto/nuevo")
    public Producto agregarGasto(@RequestBody AgregarGastoDTO dto){
        return cuentaService.agregarGasto(dto);
    }

    @GetMapping("gasto/{idCuenta}")
    public List<SoloProductoDTO> listarGastos(@PathVariable int idCuenta){
        return productoService.encontrarPorCuenta(idCuenta);
    }

    @GetMapping("gastos/{idGrupo}")
    public HashMap<String, Float> listarGastosGrupo(@PathVariable int idGrupo){
        return productoService.puestaEnCuentas(idGrupo);
    }
}
