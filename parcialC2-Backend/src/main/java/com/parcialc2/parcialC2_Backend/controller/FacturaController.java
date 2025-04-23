package com.parcialc2.parcialC2_Backend.controller;



import com.parcialc2.parcialC2_Backend.dto.FacturaDTO;
import com.parcialc2.parcialC2_Backend.entity.Factura;
import com.parcialc2.parcialC2_Backend.service.FacturaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/facturas")
@CrossOrigin(origins = "*")
public class FacturaController {
    private final FacturaService service;

    public FacturaController(FacturaService service) {
        this.service = service;
    }

    @PostMapping
    public Factura crear(@RequestBody FacturaDTO dto) {
        return service.crearFactura(dto);
    }

    @GetMapping
    public List<Factura> listar() {
        return service.listarFacturas();
    }
}
