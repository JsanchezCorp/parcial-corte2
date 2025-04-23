package com.parcialc2.parcialC2_Backend.controller;
import com.parcialc2.parcialC2_Backend.entity.Cliente;
import com.parcialc2.parcialC2_Backend.service.ClienteService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @PostMapping
    public Cliente crearCliente(@RequestBody Cliente cliente) {
        return clienteService.save(cliente);
    }
}
